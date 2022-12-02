# JS Project Proposal
Thomas Conger

## Background

Numbers can be incomprehensibly large, and on a day to day basis we can see several different numbers in headlines that seem mundane, but are actually extraordinary. One recent example is the FTX bankruptcy, where a cryptocurrency exchange lost billions of dollars in customer deposits.

What is a billion dollars, really? And how can we contextualize the FTX bankruptcy in the scale of the financial industry, the larger economy, and our daily lives?

## Inspiration

01. [The Water We Eat](http://thewaterweeat.com/)
02. [Introduction to Machine Learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
03. [Example Cover Animation A](https://www.sliderrevolution.com/templates/cyber-particle-effect/?utm_medium=inline-ad&utm_source=css-animated-background)
04. [Example Cover Animation B](https://codepen.io/RSH87/pen/gMdJKQ)


## Functionality

In this visualization of FTX's bankruptcy, users will be able to:

01. View a breakdown of FTX's claimed assets at two different time intervals, several weeks before the bankruptcy filing and at the time of the bankruptcy filing
02. See a live market cap of bitcoin and several financial companies (compared)
03. Compare the scale of the FTX bankruptcy to other financial disasters and fraud, such as Long Term Capital Management's billion dollar implosion (another instance of a failure of risk management, albeit without stolen funds) and Bernie Madoff's ponzi scheme.
04. Compare the scale of the FTX bankrupty to everyday items, such as the number of iPhones the loss could purchase, different food items, or the average educatonal spending per student in the US
05. A count-down until the user would be able to pay off the debt (if they were FTX) and they had earned a million dollars per second

In addition, the project will have:

01. A publicly available readme
02. Animations for the graphs on scroll
03. A hero animation to pique user interest
04. Limited commentary to provide context to the visuals and to create a narrative

## Technologies, Libraries, and APIs


### Technology

01. D3 for data visualization
02. Canvas for creating the background animation
03. NPM for dependency management
04. Webpack & Babel to ease deployment and increase backwards compatibility
05. Google Fonts
04. JavaScript
05. HTML & CSS

### Data

01. Binance API, for bitcoin market data
02. Finnub API, for stock market data
03. FRED API, for national economic data, or alternatively CSV data
04. Manually compiled CSVs

## Implementation Timeline

**Friday Afternoon & Weekend:** Get basic version of web page up and running && create a basic version of each visualization

01. Quickly write first draft of article content
02. Create responsive webpage outline with css styling for article body, title, and byline with the required links && placeholders for graphs and animations
03. Create basic background hero / splash canvas animation
04. Create static versions of each data visualization

**Monday:** Fine-tune non-data css and content && start data animations

01. Finalize static version of web page
02. Animate first two data vizualizations

**Tuesday:** Continue animations, fine-tuning article CSS as required for animations

01. Finish data visualizations for charts.
02. Add interactivity to canvas hero animation
03. Add interactivity to one or more charts

Wednesday:

01. Flex time to finish any components / iron out bugs

**Thursday Morning:** Deploy to GitHub pages and rewrite the readme.

## Bonus Features

01. User submitted comparisons
02. Tooltips on data visualizations
03. Calculators 
