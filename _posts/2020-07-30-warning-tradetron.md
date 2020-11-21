---
layout: post
title:  A word of warning about Tradetron's strategy subscription services.
date:   2020-07-30 14:00:00
description: Tradetron's strategy subscription service for algorithmically trading your capital sounds great on paper. But is it actually great? Or is there more to it?
---

<br>

#### Guys, a word on @Tradetron1 or any backtest + algo trading service out there.

Go check out the <a href="https://tradetron.tech/strategy/102">Options SAR strategy</a> first.

Some problems I see in this:

1. Look at this strategy. I don't know what this strategy is, but right out of the bat, it shows the max DD as ~23% in one place, and about 77%.
<br><img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/5_tradetron_1.png">
<br><br><img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/5_tradetron_2.png">

2. When you look at the PNL figures in the page, on a monthly breakup, you don't know the actual PNL. Their figures haven't taken into account the spread, slippage, and commissions.

3. Annual return of 1455.3% and max drawdown of 23.4% might look outstanding. But it also looks unrealistic. Like, heavily unrealistic.

4. One year of backtest may look wonderful. But, for you to know that a strategy has longevity and will stand the test of time, it needs at least 7-10 years of backtest. Or, if there are 1000 trades, the backtest report would be significant enough to proceed to the next step.

5. The total number of trades, points per trade - these two parameters are very important. If the strategy made 1400% on a year's worth of trades that are over and above 500 trades, let's do some math. 1400% of 30k is 420k. 420k in nifty points is 5600.
<br><br>Let's assume the total trades per year to be 500 for illustration.
<br><br>Let's keep 1 point as commission, 1 point slippage on either side, 1 point bid-ask spread on either side. That makes it 5 points.
<br><br>5*500 = 2500 points. Deduct 2500 points from the total 5600 points. This cuts the returns by 45%
<br><br>If you have 2100 points net, and 500 trades a year, how many points do you make per trade? 4.2 points give or take a few basis points. Not too good.

6. If you backtest this over last 10 years, I am damn sure that some years will go deep underwater. You just don't know how much underwater it would go, if this strategy would wipe you out. If it historically wiped you out, it will most likely wipe you out this time too.

7. And so, the following things are important to see in a backtest report at least as a first pass filter.
- At least 10 years of backtest.
- No of trades
- Max drawdown
- Time drawdown
- Time from max dd to new equity high
- CAGR/maxDD at least > 1.5
- decent unlevered CAGR.
- at least 7-10 points per trade if NIFTY
- at least 20-30 points per trade if BANKNIFTY

8. It's important these backtests weren't run on SPOT, but run on Futures. Option prices move based on Futures. So, unless the backtests ran on actual options data, backtests run on Futures should be your next best bet. If you backtest a strategy on NIFTY and it gives 3000 points per year, the same on futures would give ~1700-2000 pts.

In my backtesting, this has been the approximate case. Account for 30-40% reduction in no of points backtesting in futures. That would be the case if you trade live too. When that happens, another 5 points per trade in commissions and slippage will happen. That would render these systems useless.

There are lot of things that goes on in the background for backtesting. Unless you know the strategy and you have manually backtested it for at least 7-10 years, don't trade it. Don't sign up for online auto-trade platforms unless they provide comprehensive reports.

Be especially wary of platforms that show mere 6 months backtest and ask you to trade it. I think Tradetron is a good initiative and effort. That said, just don't jump in looking at these shiny equity charts and numbers, and commit money to trading these strategies.

End of day, you're going to conclude that most of these services are useless. They only separate you from your money. You'll go only back to putting money in shitty mutual funds that give sub-par returns. So, just don't experiment with money unless you know what you're doing.



With Tradetron or any similar service for that matter, first let the service exist for 2-3 years. At the end of 3 years, see their track record and then decide. Don't jump in as beta test users. This is not some SaaS software to jump and test for brownie points. This is real money in line.

Also, don't backtest any option strategy for only one or two years and jump into trading. If you do that, you'll find out the hard way that you made a mistake. Stop allowing greed to blind you and let some common sense seep in.




