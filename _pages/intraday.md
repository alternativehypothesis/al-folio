---
layout: page
title: intraday experiment
permalink: /experiment
description:
nav: true
social: true
---

I have begun an experiment to trade one of the systems I use for live trading, from my backtesting process.

I will be aggressively compounding with strict money management rules.

Some Simple Rules I am following for the system trading of this particular system:

1. 2xATM option buying based on Futures level at the time of buying.

    For ex: At the time of entry, if futures level is at 35525, and long signal is issued, I buy 2x35500CE
    At the time of entry, if futures level is at 35575, and long signal is issued, I buy 2x35600CE

    Vice versa for short signals

    2xATM because when we enter, it's likely to have 0.5x2 -> 1 Delta in relationship with futures. This changes depending upon when we are entering and exiting. But in my backtests and forward tests, I have found that it helps track futures quite well, with 98% accuracy.

2. I don't trade current weekly expiry on wednesday and thursday. On wednesday (or even by Tuesday afternoon),
I shift to next weekly expiry options for trading. People I know who do option buying systematically (like Madan,
Pavan, etc.,) stick with current weekly. But I just find it better to avoid theta decay during wednesdays and thursdays
with next weekly if the trade is a loser.

    Of course, backtest your system and see the probability of having a winning trade vs losing trade on wednesdays and thursdays.
    If the probability of winning is more, then you can stick with current weekly. Otherwise, the next weekly doesn't have much difference
    in terms of delta tracking, but loses less on theta decay if position goes against you.

3. My system's max drawdown was 49k odd rupees historically. So, in efforts to compound aggressively, I have started with 12 lots
(6 lots futures) options, on a 3 lakh capital. This I am doing on my interactive brokers account. Maybe one or two years down the road,
I shall share the equity curve from interactive brokers reports.

4. I will not resort to option selling at any point for this system - this is the most likely case. But this system has potential for spread type option selling.
I will explore that separately, outside of this experiment. For this experiment, I'll only stick with option buying.

5. Whatever execution optimization I do, I will share that here.


I will either compound very well, or fail gloriously.

If I compound really well, and manage to replicate the results that are achieved by the likes of Madan, Pawan, Guhan Ganesh, etc., you will have one more person who shows it's possible, and you too can start.

If I fail, I'll fail gloriously and we can all laugh about it.

Three Lakh rupees is not a disposable amount for me. It's equal to 4 months of salary at my first job, a month or two's profits at my business, etc., and so I'll be a bit more cautious than normal.

I have begun logging the trades along with screenshot of the broker terminal at EOD every day.

You can find that here -> <a href="https://docs.google.com/spreadsheets/d/1vAnGItVH8CX2wub2U26AiQoIsVqic_V3j_TMNaj0Q0M/edit?usp=sharing">System Trading Experiment Trade Log</a>
