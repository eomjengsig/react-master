import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "./api";
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface RouteParams {
  coinId: string;
}

const Price = ({ coinId }: RouteParams) => {
  const { isLoading, data } = useQuery<PriceData>(["price", coinId], () =>
    fetchCoinTickers(coinId)
  );
  console.log(data?.quotes.USD.price.toFixed(2));
  console.log(data?.quotes.USD.ath_price.toFixed(2));

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Price = styled.span`
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <h1>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <Box>
          <Price>High Price: ${data?.quotes.USD.ath_price.toFixed(2)}</Price>
          <Price>Now Price: ${data?.quotes.USD.price.toFixed(2)}</Price>
        </Box>
      )}
    </h1>
  );
};

export default Price;
