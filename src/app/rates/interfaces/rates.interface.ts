export interface RateReport {
  currency: string;
  exchange_direction: string;
  date_time: Date;
  rates?: { [key: string]: Rate } | null | undefined;
}

export interface Rate {
  buy?: number | null | undefined;
  sell?: number | null | undefined;
  mid?: number | null | undefined;
}
