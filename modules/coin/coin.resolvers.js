import Coin from './coin.model.js';
const COINGECKO_SIMPLE_PRICE_URL = 'https://api.coingecko.com/api/v3/simple/price';
const COINGECKO_MARKETS_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const buildPriceApiUrl = (coingeckoId) => `${COINGECKO_SIMPLE_PRICE_URL}?ids=${encodeURIComponent(coingeckoId)}&vs_currencies=usd`;
const buildMarketsApiUrl = (coingeckoId) => `${COINGECKO_MARKETS_URL}?ids=${encodeURIComponent(coingeckoId)}&vs_currency=usd`;
const fetchCoinMarketData = async (coingeckoId) => {
    const marketsUrl = buildMarketsApiUrl(coingeckoId);
    const response = await fetch(marketsUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch market data (status ${response.status})`);
    }
    const data = (await response.json());
    const [coinData] = data;
    if (!coinData || typeof coinData.current_price !== 'number') {
        throw new Error('Market data missing from CoinGecko response');
    }
    return {
        currentPrice: coinData.current_price,
        priceChange24h: coinData.price_change_percentage_24h ?? 0,
    };
};
const refreshCoinPrice = async (coin) => {
    if (!coin?.priceApiUrl || !coin?.coingeckoId) {
        return coin;
    }
    try {
        const { currentPrice, priceChange24h } = await fetchCoinMarketData(coin.coingeckoId);
        coin.currentPrice = currentPrice;
        coin.price_change_24h = priceChange24h;
        await coin.save();
    }
    catch (error) {
    }
    return coin;
};
const coinResolvers = {
    Query: {
        getAllCoins: async () => {
            const coins = await Coin.find().sort({ createdAt: -1 });
            return Promise.all(coins.map(refreshCoinPrice));
        },
        getActiveCoins: async () => {
            const coins = await Coin.find({ isActive: true }).sort({ createdAt: -1 });
            return Promise.all(coins.map(refreshCoinPrice));
        },
        getCoin: async (_, { id }) => {
            const coin = await Coin.findById(id);
            if (!coin)
                return null;
            return refreshCoinPrice(coin);
        },
        getCoinBySymbol: async (_, { symbol }) => {
            const coin = await Coin.findOne({ symbol: symbol.toUpperCase() });
            if (!coin)
                return null;
            return refreshCoinPrice(coin);
        },
    },
    Mutation: {
        createCoin: async (_, { data }, context) => {
            const existingCoin = await Coin.findOne({ symbol: data.symbol.toUpperCase() });
            if (existingCoin) {
                return {
                    success: false,
                    message: 'Coin with this symbol already exists',
                    data: null,
                };
            }
            const coingeckoId = (data.coingeckoId || data.name || '').toLowerCase().trim();
            if (!coingeckoId) {
                return {
                    success: false,
                    message: 'coingeckoId is required',
                    data: null,
                };
            }
            const coin = await Coin.create({
                ...data,
                symbol: data.symbol.toUpperCase(),
            });
            return {
                success: true,
                message: 'Coin created successfully'
            };
        },
        updateCoin: async (_, { id, data }, context) => {
            const updateData = { ...data };
            if (updateData.coingeckoId) {
                updateData.coingeckoId = updateData.coingeckoId.toLowerCase().trim();
                updateData.priceApiUrl = updateData.priceApiUrl || buildPriceApiUrl(updateData.coingeckoId);
            }
            const coin = await Coin.findByIdAndUpdate(id, updateData, { new: true });
            if (!coin) {
                throw new Error('Coin not found');
            }
            if (updateData.coingeckoId || updateData.priceApiUrl || updateData.currentPrice === undefined) {
                await refreshCoinPrice(coin);
            }
            return {
                success: true,
                message: 'Coin updated successfully',
                data: coin,
            };
        },
        deleteCoin: async (_, { id }, context) => {
            const coin = await Coin.findByIdAndDelete(id);
            if (!coin) {
                throw new Error('Coin not found');
            }
            return {
                success: true,
                message: 'Coin deleted successfully',
                data: null,
            };
        },
        toggleCoinStatus: async (_, { id, isActive }, context) => {
            const coin = await Coin.findById(id);
            if (!coin) {
                return {
                    success: false,
                    message: 'Coin not found',
                    data: null,
                };
            }
            coin.isActive = isActive;
            await coin.save();
            return {
                success: true,
                message: `Coin ${isActive ? 'activated' : 'deactivated'} successfully`,
            };
        },
    },
};
export default coinResolvers;
//# sourceMappingURL=coin.resolvers.js.map