const quotes = [
  {
    "quote": "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston S. Churchill",
    "category": "Business"
  },
  {
    "quote": "It is better to fail in originality than to succeed in imitation.",
    "author": "Herman Melville",
    "category": "Business"
  },
  {
    "quote": "The road to success and the road to failure are almost exactly the same.",
    "author": "Colin R. Davis",
    "category": "Business"
  },
  {
    "quote": "The best way to predict the future is to create it.",
    "author": "Peter Drucker",
    "category": "Business"
  },
  {
    "quote": "Rule No. 1: Never lose money; rule No. 2: Don’t forget rule No. 1.",
    "author": "Warren Buffett",
    "category": "Business"
  },
  {
    "quote": "Change before you have to.",
    "author": "Jack Welch",
    "category": "Business"
  },
  {
    "quote": "Your most unhappy customers are your greatest source of learning",
    "author": "Bill Gates",
    "category": "Business"
  },
  {
    "quote": "There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.",
    "author": "Sam Walton",
    "category": "Business"
  },
  {
    "quote": "A business that makes nothing but money is a poor business.",
    "author": "Henry Ford",
    "category": "Business"
  },
  {
    "quote": "Choose a job that you love, and you will never have to work a day in your life.",
    "author": "Confucius",
    "category": "Business"
  },
  {
    "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "category": "Business"
  },
  {
    "quote": "All our dreams can come true – if we have the courage to pursue them.",
    "author": "Walt Disney",
    "category": "Business"
  },
  {
    "quote": "Business opportunities are like buses, there’s always another one coming.",
    "author": "Richard Branson",
    "category": "Business"
  },
  {
    "quote": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth",
    "category": "Business"
  },
  {
    "quote": "I learned to never kick someone when they’re down. Everyone makes mistakes, and some are real whoppers. But that makes them whopping opportunities, too.",
    "author": "Jack Welsh",
    "category": "Business"
  },
  {
    "quote": "You need to have a culture instead of a payroll so that people watch themselves. What does this? Not money, but enhanced self-esteem.",
    "author": "Steve Wynn",
    "category": "Business"
  },
  {
    "quote": "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better.",
    "author": "Jim Rohn",
    "category": "Business"
  },
  {
    "quote": "Stop chasing the money and start chasing the passion.",
    "author": "Tony Hsieh",
    "category": "Business"
  },
  {
    "quote": "Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure, or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.",
    "author": "Thomas J. Watson",
    "category": "Business"
  },
  {
    "quote": "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    "author": "Tony Robbins",
    "category": "Business"
  },
  {
    "quote": "Don’t be distracted by criticism. Remember–the only taste of success some people get is to take a bite out of you.",
    "author": "Zig Ziglar",
    "category": "Business"
  },
  {
    "quote": "The secret of success is to do the common thing uncommonly well.",
    "author": "John D. Rockefeller Jr.",
    "category": "Business"
  },
  {
    "quote": "You know you are on the road to success if you would do your job, and not be paid for it.",
    "author": "Oprah Winfrey",
    "category": "Business"
  },
  {
    "quote": "If someone is out in the desert walking around, they’re going to be thirsty. You just have to ask them what they want to drink.",
    "author": "Arthur Blank",
    "category": "Business"
  },
  {
    "quote": "I never did anything worth doing by accident, nor did any of my inventions come indirectly through accident, except the phonograph. No, when I have fully decided that a result is worth getting, I go about it, and make trial after trial, until it comes.",
    "author": "Thomas Edison",
    "category": "Business"
  },
  {
    "quote": "If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.",
    "author": "Mark Zuckerberg",
    "category": "Business"
  },
  {
    "quote": "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",
    "author": "Helen Keller",
    "category": "Business"
  },
  {
    "quote": "Better three hours too soon, than one minute too late.\n",
    "author": "William Shakespeare",
    "category": "Time"
  },
  {
    "quote": "Time is the wisest counselor of all.",
    "author": "Pericles",
    "category": "Time"
  },
  {
    "quote": "Time is the school in which we learn, time is the fire in which we burn.",
    "author": "Delmore Schwartz",
    "category": "Time"
  },
  {
    "quote": "Nothing is a waste of time if you use the experience wisely.",
    "author": "Rodin",
    "category": "Time"
  },
  {
    "quote": "Time as he grows old teaches many lessons.",
    "author": "Aeschylus",
    "category": "Time"
  },
  {
    "quote": "Histories make men wise.",
    "author": "Francis Bacon",
    "category": "Time"
  },
  {
    "quote": "Time is what we want most, but what we use worst.",
    "author": "William Penn",
    "category": "Time"
  },
  {
    "quote": "The common man is not concerned about the passage of time, the man of talent is driven by it.",
    "author": "Shoppenhauer",
    "category": "Time"
  },
  {
    "quote": "Time = life; therefore, waste your time and waste of your life, or master your time and master your life.",
    "author": "Alan Lakein",
    "category": "Time"
  },
  {
    "quote": "Don’t be fooled by the calendar. There are only as many days in the year as you make use of. One man gets only a week’s value out of a year while another man gets a full year’s value out of a week.",
    "author": "Charles Richards",
    "category": "Time"
  },
  {
    "quote": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much can be done if we are always doing.",
    "author": "Thomas Jefferson",
    "category": "Time"
  },
  {
    "quote": "A man who dares to waste one hour of life has not discovered the value of life.",
    "author": "Charles Darwin",
    "category": "Time"
  },
  {
    "quote": "Once you have mastered time, you will understand how true it is that most people overestimate what they can accomplish in a year – and underestimate what they can achieve in a decade!",
    "author": "Anthony Robbins",
    "category": "Time"
  },
  {
    "quote": "It’s not enough to be busy, so are the ants. The question is, what are we busy about?",
    "author": "Henry David Thoreau",
    "category": "Time"
  },
  {
    "quote": "The time for action is now. It’s never too late to do something.",
    "author": "Carl Sandburg",
    "category": "Time"
  },
  {
    "quote": "Too many people spend money they earned..to buy things they don't want..to impress people that they don't like.",
    "author": "Will Rogers",
    "category": "Money"
  },
  {
    "quote": "A wise person should have money in their head, but not in their heart.",
    "author": "Jonathan Swift",
    "category": "Money"
  },
  {
    "quote": "Wealth consists not in having great possessions, but in having few wants.",
    "author": "Epictetus",
    "category": "Money"
  },
  {
    "quote": "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each.",
    "author": "Christopher Rice",
    "category": "Money"
  },
  {
    "quote": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin",
    "category": "Money"
  },
  {
    "quote": "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.",
    "author": "Warren Buffett",
    "category": "Money"
  },
  {
    "quote": "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years.",
    "author": "Warren Buffett",
    "category": "Money"
  },
  {
    "quote": "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one.",
    "author": "Benjamin Franklin",
    "category": "Money"
  },
  {
    "quote": "Formal education will make you a living; self-education will make you a fortune.",
    "author": "Jim Rohn",
    "category": "Money"
  },
  {
    "quote": "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    "author": "Ayn Rand",
    "category": "Money"
  },
  {
    "quote": "It is not the man who has too little, but the man who craves more, that is poor.",
    "author": "Seneca",
    "category": "Money"
  },
  {
    "quote": "It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages.",
    "author": "Henry Ford",
    "category": "Money"
  },
  {
    "quote": "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all.",
    "author": "Eleanor Roosevelt",
    "category": "Money"
  },
  {
    "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    "author": "Franklin D. Roosevelt",
    "category": "Money"
  },
  {
    "quote": "Empty pockets never held anyone back. Only empty heads and empty hearts can do that.",
    "author": "Norman Vincent Peale",
    "category": "Money"
  },
  {
    "quote": "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy.",
    "author": "George Lorimer",
    "category": "Money"
  },
  {
    "quote": "You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you.",
    "author": "Maya Angelou",
    "category": "Money"
  }
]