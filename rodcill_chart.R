# Candlestick Chart dengan ggplot2

# Load library ggplot2
library(ggplot2)

# Data contoh (OHLC - Open, High, Low, Close)
data <- data.frame(
  date = as.Date('2025-01-01') + 0:4,
  open = c(100, 102, 104, 106, 108),
  high = c(105, 107, 108, 110, 112),
  low = c(98, 101, 103, 105, 107),
  close = c(103, 105, 107, 109, 110)
)

# Grafik candlestick
ggplot(data, aes(x = date)) +
  geom_segment(aes(x = date, xend = date, y = low, yend = high), color = "black") +
  geom_rect(aes(
    xmin = date - 0.3, xmax = date + 0.3,
    ymin = pmin(open, close), ymax = pmax(open, close),
    fill = close > open
  ), color = "black") +
  scale_fill_manual(values = c("TRUE" = "green", "FALSE" = "red")) +
  labs(title = "Candlestick Chart", x = "Date", y = "Price") +
  theme_minimal()
