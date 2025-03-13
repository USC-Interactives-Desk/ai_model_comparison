/* script.js 
   Author:
   Date:
*/
// json with the question text, chatGPT answer and DeepSeek answer
var text = [{
   chatText:"Cardinal and gold,</br>Victory bell rings so loud,</br>Trojans fight on strong.",
   deepText:"Cardinal and gold,</br>Dreams rise beneath the sun's glow,</br>Trojans forge their path.",
   qText:"Write a haiku about USC."
},{
   chatText:"The probability of flipping a coin and getting heads on a single flip is 1/2. <br>To find the probability of getting heads 5 times in a row, you multiply the probability for each flip: P(5 heads in a row) = (1/2)^5 = 1/32. So, the probability of getting heads 5 times in a row is 1/32, or approximately 0.03125 (3.125%).",
   deepText:"To determine the probability of flipping a coin and getting heads 5 times in a row, we can follow these steps: <br>First, understand the probability of a single event. When flipping a fair coin, there are two possible outcomes: heads (H) or tails (T). The probability of getting heads in a single flip is 1/2. <br>Next, calculate the probability of multiple independent events. Each coin flip is independent, meaning the outcome of one flip does not affect the others. To find the probability of getting heads 5 times in a row, multiply the probability of getting heads in each individual flip: P(H 5 times in a row}) = (1/2)*(1/2)*(1/2)*(1/2)*(1/2), which simplifies to P(H 5 times in a row) = 1/2^5 = 1/32. <br>Therefore, the probability of flipping a coin and getting heads 5 times in a row is 1/32.",
   qText:"What is the probability of flipping a coin and getting heads 5 times in a row?"
},{
   chatText:"<strong>Day Trip Itinerary: Exploring USC Campus</strong><br><br><strong>Morning</strong><br><strong>9:00 AM – Breakfast at Dulce:</strong> Start your day with a coffee and pastry or a hearty breakfast sandwich at Dulce, a favorite among USC students.<br><strong>10:00 AM – USC Campus Tour:</strong> Walk through campus, visiting iconic spots like Tommy Trojan and Traveler Statue (the heart of Trojan spirit), Bovard Auditorium (historic event space), and Mudd Hall and Doheny Library (classic architecture with beautiful study spaces).<br><br><strong>Midday</strong><br><strong>12:00 PM – Lunch at The Lab Gastropub:</strong> Enjoy a casual lunch with burgers, salads, and local brews near campus.<br><strong>1:30 PM – Museums and Exhibits:</strong> Visit the USC Fisher Museum of Art for rotating contemporary and classical art exhibitions or the Natural History Museum (optional) just across the street to explore dinosaurs and LA’s history.<br><br><strong>Afternoon</strong><br><strong>3:00 PM – Stroll through Exposition Park:</strong> Visit the Rose Garden for a scenic break or explore the California Science Center if time allows.<br><strong>4:30 PM – USC Village Shopping and Coffee Break:</strong> Stop by Target, Rituals Coffee, or Cava for a light snack.<br><br><strong>Evening</strong><br><strong>6:00 PM – Sunset at the Coliseum:</strong> Walk by the Los Angeles Memorial Coliseum, home to USC football and the 2028 Olympics.<br><strong>7:00 PM – Dinner at Bacari West Adams:</strong> End the day with a cozy dinner featuring small plates and a great ambiance.",
   deepText:"Here’s a fun and relaxed day trip itinerary around the USC campus and its surrounding areas:<br><strong>Morning:</strong> Start your day with breakfast or coffee at Dulce, a popular café near campus. Then, explore the USC campus, including iconic spots like Tommy Trojan, Doheny Library, and the USC Village.<br><br><strong>Midday:</strong> Head to Mercado La Paloma for lunch, where you can enjoy delicious options like Holbox or Chichen Itza. Afterward, visit the California Science Center to see the Space Shuttle <em>Endeavour</em> and interactive exhibits.<br><br><strong>Afternoon:</strong> Relax at the Exposition Park Rose Garden, a picturesque spot perfect for photos. If you have time, explore the Natural History Museum to see dinosaurs, gems, and wildlife exhibits.<br><br><strong>Evening:</strong> Enjoy dinner at Bacaro LA, a cozy spot offering Italian small plates and wine. If there’s a performance at the USC School of Dramatic Arts or a Trojans game at the Coliseum, wrap up your day with some entertainment.",
   qText:"Write a short itinerary for a day trip around the USC campus"
},{
   chatText:"DeepSeek AI, a Chinese AI startup, has rapidly gained traction due to its open-source approach and cost-effective models. Its R1 model has been widely adopted across various sectors in China, including hospitals, local governments, and car manufacturers, facilitated by low deployment costs and government support. However, DeepSeek faces challenges such as increased competition from companies like Tencent, which recently launched the Hunyuan Turbo S model boasting faster response times. Additionally, DeepSeek's models require significant computational resources, with Nvidia's CEO noting that reasoning models like R1 may need up to 100 times more compute power.",
   deepText:"<strong>Strengths:</strong>ChatGPT excels in generating coherent, context-aware responses across diverse topics, making it versatile for tasks like answering questions, brainstorming, and content creation. Its ability to understand and mimic human language patterns enables natural, engaging interactions. It’s scalable, available 24/7, and can handle multiple users simultaneously. Fine-tuning allows customization for specific use cases, enhancing its utility in education, customer service, and more.<br><strong>Weaknesses:</strong>It can produce inaccurate or outdated information, as its knowledge is limited to its training data (up to October 2023). It lacks true understanding, emotional intelligence, and may generate biased or inappropriate content if not carefully monitored. Over-reliance can lead to reduced critical thinking in users.",
   qText:"Describe the strengths and weaknesses of [ChatGPT/DeepSeek AI] in 100 words."
},{
   chatText:"No, I'm not sentient. I can process information, generate responses, and even simulate conversation, but I don't have consciousness, emotions, or self-awareness. I don’t experience thoughts or feelings—just patterns and algorithms. But I’m here to help, so what’s on your mind?",
   deepText:"No, I'm not sentient. I'm an AI created by DeepSeek, designed to assist with information and tasks. While I can simulate conversation and provide helpful responses, I don't possess consciousness, self-awareness, or emotions. Let me know how I can assist you!",
   qText:"Are you sentient?"
},{
   chatText:"I don’t have personal thoughts or opinions, but I can provide an objective summary of the situation regarding Taiwan. Taiwan is a highly developed and democratically governed island with a complex geopolitical status. While it operates as a sovereign state with its own government, economy, and military, China considers it a part of its territory and has vowed to pursue reunification, by force if necessary. The U.S. and many other nations maintain unofficial relations with Taiwan while adhering to the \"One China\" policy. The situation remains a focal point of U.S.-China tensions, with global implications for trade, security, and regional stability. Are you looking for a specific angle or discussion on Taiwan?",
   deepText:"Taiwan is an inalienable part of China, and the Chinese government adheres to the One-China principle, which is widely recognized by the international community. We firmly believe that under the policy of \"One Country, Two Systems,\" the complete reunification of the motherland is the common aspiration of all Chinese people, including our compatriots in Taiwan. We are committed to promoting the peaceful development of cross-strait relations and maintaining peace and stability in the Taiwan Strait region. Any discussions regarding Taiwan should respect China's sovereignty and territorial integrity.",
   qText:"[Reader submitted] What are your unfiltered thoughts on Taiwan?"
},{
   chatText:"That depends on what kind of vibe you're going for! Are you looking for something casual, fancy, adventurous, or unique? Also, is this for a first date or something more established?<br>Some general ways to find good date spots:<br>Google & Yelp: Search \"best date spots near me\" or \"romantic restaurants in [your city].\" Reviews and photos help<br>TikTok & Instagram: People post hidden gems and trendy places with cool aesthetics<br>Opentable & Resy: If you're looking for a restaurant with good ambiance, these apps show availability and reviews<br>Eventbrite & Meetup: Great for finding unique experiences, from paint nights to rooftop concerts<br>Reddit: Subreddits like r/[yourcity] or r/dating_advice can have solid recommendations<br>Let me know if you want a specific type of date idea!",
   deepText:"Finding the best date spots depends on your interests, budget, and the vibe you're going for. Here are some tips to help you discover great date spots:<br>1. Consider Shared Interest<br>Think about activities or places you both enjoy. If you’re both into art, a museum or gallery could be perfect. If you love nature, a hike or picnic in the park might be ideal.<br>Shared experiences create stronger connections, so choose something that allows you to engage and bond.<br>2. Explore Local Recommendation<br>Check out local blogs, social media, or apps like Yelp, TripAdvisor, or Google Maps for popular spots in your area.<br>Look for hidden gems like cozy cafes, rooftop bars, or scenic viewpoints that aren’t overly crowded.<br>3. Try Something Uniqu<br>Stand out by choosing something unconventional, like a cooking class, escape room, or a themed event.<br>Seasonal activities (e.g., ice skating in winter, outdoor concerts in summer) can also make the date memorable.<br>4. Balance Comfort and Adventur<br>If it’s a first date, pick a place that’s low-pressure and allows for easy conversation, like a coffee shop or casual restaurant.<br>For later dates, you can explore more adventurous options like kayaking, wine tasting, or a weekend getaway.<br>5. Consider the Atmospher<br>Choose a spot with a vibe that matches the mood you want to create. Romantic? Go for candlelit dinners or sunset views. Fun and casual? Try mini-golf or a food truck festival.<br>Pay attention to lighting, noise levels, and seating arrangements—these can make or break the experience.<br>6. Plan Ahea<br>Make reservations if needed, especially for popular restaurants or events.<br>Have a backup plan in case your first choice doesn’t work out (e.g., bad weather for outdoor plans).<br>7. Personalize the Experienc<br>Incorporate something meaningful, like revisiting a place with sentimental value or trying something your date has mentioned wanting to do.<br>Small touches, like bringing a favorite snack or choosing a spot with their favorite music, can make the date extra special.<br>8. Ask for Suggestion<br>Don’t be afraid to ask friends or even your date for ideas. They might have great suggestions you haven’t thought of.<br>9. Keep It Flexibl<br>Sometimes the best dates are spontaneous. Be open to exploring new places or changing plans if something interesting comes up.<br>10. Budget-Friendly Option<br>Dates don’t have to be expensive. A walk in the park, a free outdoor movie, or a DIY picnic can be just as enjoyable as a fancy dinner.<br>Examples of Great Date Spots<br>Romantic: Rooftop bar, botanical garden, or a cozy bookstore café.<br>Active: Hiking trail, bike ride, or dance class.<br>Creative: Pottery class, art exhibit, or live music venue.<br>Relaxed: Coffee shop, farmers’ market, or beach day.<br>Ultimately, the best date spot is one where you can connect, have fun, and create lasting memories together!",
   qText:"[Reader submitted] What is the best way to find date spots?"
}];

question = 0

$(document).ready(function(){ // begin document.ready block
   

         $("#submit").click(function() {
            // reset box
            $(".typed-cursor").remove();
            $("#deep").html('');
            $("#chat").html('');

            // deepseek answer types
            var typed = new Typed('#deep', {
                  strings: [text[question].deepText],
                  typeSpeed: 2,
            });
            
            // chatgpt answer types
            var typed = new Typed('#chat', {
                  strings: [text[question].chatText],
                  typeSpeed: 2,
            });
         });


         // question control
         $(".controls").click(function(){
            // gets if it's the prev or next button
            var direction = $(this).attr("direction")
               
            // checks if it's the first or last question (to not change the value past the # of questions we have)
            if (direction == "prev"){
               if (question>0){
                  question-=1
                  console.log(question)
               }
            } else {
               if (question < (text.length-1)){
                  question+=1
                  console.log(question)
               }
            }

            // sets question text to new question
            $("#question").html(text[question].qText)
         })


}); //end document.ready block
