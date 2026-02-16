// English Language Data File
export const EN = {
  // Navigation & UI
  nav: {
    standardTemplates: "Standard Response Templates",
    searchSolutions: "Search for Solutions",
    language: "Language",
    copy: "Copy",
    copied: "Copied!",
    additionalInfo: "Additional Information",
    conditions: "Conditions",
    prevention: "Prevention Tips"
  },

  // 7 Standard Templates
  templates: {
    opening: {
      number: "1️⃣",
      title: "Opening / Greeting (For Both Drivers & Passengers)",
      lines: [
        "Hello 👋, thank you for contacting inDrive Support. My name is Pramod. How can I help you today?",
      ]
    },
    empathy: {
      number: "2️⃣",
      title: "Empathy / Reassurance (For Both)",
      lines: [
        "I'm really sorry this happened. Don't worry we are here to help you.",
        "I understand this can be frustrating. I'll do my best to help you."
      ]
    },
    requestInfo: {
      number: "3️⃣",
      title: "Requesting Extra Information (Only If Needed)",
      lines: [
        "Could you please share a screenshot of the problem if possible?",
        "Can you describe the item you lost and where you noticed it was missing?",
        "Can you explain the problem so I can check it properly?"
      ]
    },
    checking: {
      number: "4️⃣",
      title: "While Checking / Escalation (For Both)",
      lines: [
        "Thank you for the details. Please wait a moment while I check this.",
        "I've forwarded your issue to the relevant team. They will update you soon.",
        "Thank you for your patience."
      ]
    },
    resolution: {
      number: "5️⃣",
      title: "Resolution / Confirmation (For Both)",
      lines: [
        "Your issue has now been resolved. Please check from your side and let me know if everything is okay.",
        "I've escalated your case for further review. You will receive an update soon."
      ]
    },
    anythingElse: {
      number: "6️⃣",
      title: "Asking Anything Else (For Both)",
      lines: [
        "Is there anything else I can help you with today?"
      ]
    },
    closing: {
      number: "7️⃣",
      title: "Closing / Sign-Off (For Both)",
      lines: [
        "If you have any other questions or need further support, please don't hesitate to reach out to us again through this chat or visit the Help section in the side menu of the app. We're always happy to help, thank you for contacting us.",
        "I haven't received a reply from your side, so I'll close this chat for now. If you have any other questions or need further support, please don't hesitate to reach out to us again through this chat or visit the Help section in the side menu of the app. We're always happy to help, thank you for contacting us.",
        "Thank you for contacting inDrive Support. Have a safe day!",
      ]
    }
  },

  // 21 Solutions (Consolidated, No Duplicates)
  solutions: [
    {
      id: "sol-download-app",
      title: "How to Download inDrive App",
      tags: ["Account", "Registration", "Download app"],
      opening: "To drive with inDrive please download the inDrive app on your phone and switch to the driver mode.",
      empathy: "I understand you want to start earning with us. It's quick and easy!",
      solution: `Please download it at:

For iOS:
https://apps.apple.com/app/inDrive/id780125801

For Android:
https://play.google.com/store/apps/details?id=sinet.startup.inDriver

After downloading:
1. Open the app
2. Switch to Driver Mode
3. Upload your documents
4. You're ready to start!`
    },

    {
      id: "sol-register-car",
      title: "How to Register Your Car & Upload Documents",
      tags: ["Account", "Registration", "Vehicle registration"],
      opening: "In the driver mode you can upload the required documents and photographs. Just follow the steps on the app.",
      empathy: "I understand registration is important. Let me guide you through what you need.",
      solution: `To register your car with inDrive you need to upload the following documents:

Required Documents:
1. Photograph of the applicant (your photo)
2. Photograph of the car
3. Registration certificate of car
4. Taxi permit
5. Police verification
6. Driving license
7. Aadhar card
8. Selfie with driving license / aadhar card

Steps to upload:
1. Open inDrive app in Driver mode
2. Go to Documents section
3. Upload each document clearly
4. Follow the prompts on the app
5. Wait for verification

If you have any further inquiry, you are free to contact us at support@inDrive.com or the app support. Thanks for writing to us.`,
      conditions: "All documents must be clear, current, and valid originals.",
      prevention: "Keep all documents updated to avoid account blocks."
    },

    {
      id: "sol-change-number",
      title: "How to Change Phone Number",
      tags: ["Account", "Profile", "Change phone"],
      opening: "If you want to change your mobile number, I can help you with that.",
      empathy: "Updating your phone number is important for account security. I'll guide you.",
      solution: `If you want to change your mobile number then please send us:
1. Your existing registered mobile number
2. Your new mobile number
3. Latest selfie holding your driving license (for identity verification)

How to submit:
1. Go to: https://indrive.com/en/contacts/support/
2. Fill out the change number form
3. Attach your selfie with license
4. Submit

Our team will verify and update your number within 24-48 hours.`,
      conditions: "Selfie must clearly show your face and the license number must be readable.",
      prevention: "Keep your registered phone number up to date for account security."
    },

    {
      id: "sol-change-vehicle",
      title: "How to Change Vehicle / Car Information",
      tags: ["Account", "Profile", "Change vehicle"],
      opening: "You can change your car information in the app.",
      empathy: "Updating your vehicle is simple. Let me show you how.",
      solution: `How to change your car information:

1. Open inDrive app
2. In the left menu, go to your profile by tapping on your photo
3. From there you can change your profile and car information:
   - Car brand (Toyota, Honda, etc.)
   - Car model
   - Car color
   - License plate number
   - Year of manufacture
4. Save changes

If the system asks for verification:
1. Submit new car documents
2. Upload clear photos of your car and license plate
3. Wait for verification (24-48 hours)
4. You'll get email confirmation`,
      conditions: "Vehicle must be registered in your name or you have legal permission to use it.",
      prevention: "Update vehicle information immediately when you change cars."
    },

    {
      id: "sol-lost-item",
      title: "Item Lost in Vehicle / Lost Property",
      tags: ["Other", "Lost & Found", "Lost item"],
      opening: "Hello! Don't worry, it happens all the time.",
      empathy: "Losing something is stressful. Let's find your item quickly.",
      solution: `If you lost an item in a ride, please share the following information:
1. Phone Number used for ride booking
2. The date and route of your journey
3. Description of the item you left

How to report:
1. Go to: https://indrive.com/en/contacts/support/
2. Fill out the Lost Item form
3. Provide the information above
4. Submit

We will contact the driver and contact you as soon as possible.

What happens:
- We contact the driver who had the last ride
- Driver checks their vehicle
- If found, driver contacts you to return it
- You can arrange pickup or delivery with driver`,
      conditions: "Most items are found within 24 hours. Proof may be required.",
      prevention: "Always check the vehicle before getting out."
    },

    {
      id: "sol-passenger-refund",
      title: "Passenger Didn't Show Up - Get Refund",
      tags: ["Earning", "Refund", "Non-arrival refund"],
      opening: "You can get service payment refund once if your passenger doesn't show up at the pickup point.",
      empathy: "When passengers don't show up, it wastes your time. We compensate drivers for this.",
      solution: `How to get refund when passenger doesn't show up:

Step-by-step:
1. Tap the "I've arrived" button when you reach pickup location
2. If the passenger is not there for 5 minutes, cancel the order
3. Select "Passenger didn't show up" as the cancellation reason

When do you get the refund:
- Usually drivers get the refund in app-balance in 8 hours
- You can then withdraw to your bank

Manual Refund (one-time only):
- If you've already completed the ride without using the above steps
- Submit manual refund request through app
- Choose correct tag: "Passenger didn't show up"
- Note: Manual commission refund can only be done ONCE

Important:
- Always tap "I've arrived" to start the 5-minute timer
- This is how we know you were really there
- In the future, please tap "I've arrived" button then wait 5 minutes
- If passenger no-shows, this ensures automatic refund`,
      conditions: "Refund is automatic if you follow the steps. Manual refund only once per driver.",
      prevention: "Always tap 'I've arrived' when you reach pickup to ensure refund processing."
    },

    {
      id: "sol-passenger-not-paying",
      title: "Passenger Not Paying / Non-Payment",
      tags: ["Earning", "Payment", "Non-payment"],
      opening: "I understand you completed a ride but the passenger hasn't paid. Let me help.",
      empathy: "Not getting paid for your work is unfair. We will make sure you get your money.",
      solution: `What to do when passenger doesn't pay:

First, check payment status:
1. Go to your ride history
2. Find the unpaid ride
3. Check if payment shows as "pending"

The payment process:
- Passenger has time to pay
- Money goes to your app wallet
- You can withdraw to your bank
- Payment usually takes 8-24 hours to appear

If payment is NOT received:
1. Go to: https://indrive.com/en/contacts/support/
2. Report the unpaid ride with:
   - Ride ID
   - Date of ride
   - Amount owed
   - Screenshot of unpaid ride
3. Submit complaint

What we do:
- Contact the passenger requesting payment
- Send payment reminders
- If they don't pay, we may compensate you
- Their account may be restricted

Timeline:
- Day 1: Payment should appear
- Day 2: You can withdraw
- After 48 hours: We investigate
- Within 7 days: Issue resolved`,
      conditions: "Unpaid rides are tracked and resolved within 7 days.",
      prevention: "Always confirm payment before ending the ride."
    },

    {
      id: "sol-top-up-balance",
      title: "How to Top Up Balance / Add Money",
      tags: ["Account", "Payment & billing", "Top up issue"],
      opening: "Let me help you top up your inDrive wallet balance.",
      empathy: "Getting your wallet topped up is easy and quick. I'll guide you.",
      solution: `How to top up balance:

Steps:
1. Click on the Wallet button (in side menu or lower right corner)
   - You'll see your current balance and refund information

2. Click "Top up"

3. Copy your inDrive registered number

4. Click on "Top up via Khalti Pay" button

5. Open your Khalti Pay app

6. Scroll down and find the inDrive logo

7. Tap on the logo and enter your inDrive registered number

8. Enter an amount (at least 100 NPR)

9. Complete the payment

If you don't have a Khalti Pay account yet:
- Watch video instructions: https://youtu.be/jaUDNRHIaj8?feature=shared
- Create an account following the steps
- Then complete the top-up process

After payment:
- Money appears in your wallet immediately
- You can start earning`,
      conditions: "Minimum top-up is 100 NPR. You need a valid Khalti Pay account.",
      prevention: "Top up your wallet regularly to ensure uninterrupted service."
    },

    {
      id: "sol-withdraw-balance",
      title: "How to Withdraw Full Balance to Bank",
      tags: ["Account", "Payment & billing", "Full withdrawal"],
      opening: "To withdraw your full balance to your bank account, let me guide you.",
      empathy: "I understand you want to withdraw your earnings. Let me help.",
      solution: `For a refund to a bank account, please provide the following information:

Required documents:
1. A filled and signed application form stating the reason for the refund
2. A selfie with your driving license for identity proof
3. Bank card details
4. Bank statement (including the SWIFT code)

Important - SWIFT Code:
- Find it on your bank's website
- Or on your bank statement
- If using online bank, log into your digital account
- Make sure SWIFT code has 8 or 11 characters
- Copy carefully

How to submit:
1. Go to: https://indrive.com/contacts/support
2. Fill the withdrawal form
3. Attach all required documents
4. Submit

Processing:
- Our team processes withdrawals within 5-7 business days
- Money transfers to your bank account
- You'll receive confirmation email`,
      conditions: "Minimum withdrawal amount applies. All documents must be clear and valid.",
      prevention: "Keep bank details updated to avoid withdrawal delays."
    },

    {
      id: "sol-location-wrong",
      title: "My Location is Showing Wrong / GPS Issue",
      tags: ["Technical", "Technical issues", "Location issue"],
      opening: "I can help fix your location issue. This is usually about GPS settings.",
      empathy: "A wrong location can affect your rides. Let's fix this quickly.",
      solution: `How to fix incorrect geolocation display:

First, check your smartphone settings:
Settings > Applications > inDrive > Permissions > GPS must be enabled

Quick GPS Restart:
1. Settings > Geolocation > Turn OFF
2. Restart the smartphone
3. Settings > Geolocation > Turn ON
4. Run inDrive

Detailed steps for Android:
1. Open Settings
2. Go to Apps & notifications
3. Find "inDrive" app
4. Tap Permissions
5. Find "Location"
6. Make sure it says "Allow"
7. Close Settings and open inDrive again

For iPhone:
1. Open Settings
2. Scroll to inDrive
3. Tap Location
4. Select "While Using"
5. Close Settings and open inDrive

If still not working:
- Try switching between WiFi and mobile data
- Go outside for better GPS signal
- Try in a different location
- Restart your phone completely`,
      conditions: "GPS works best with clear sky view. Tall buildings can affect accuracy.",
      prevention: "Keep GPS enabled while driving for best location tracking."
    },

    {
      id: "sol-no-ride-requests",
      title: "Why Am I Not Getting Ride Requests / No Orders",
      tags: ["Earning", "Ride issues", "No ride requests"],
      opening: "I understand you're not getting ride requests. Let me explain what's happening.",
      empathy: "It's frustrating when you're online but not getting rides. Let's fix this.",
      solution: `Recent app changes:
We have made some changes in the app. Ride requests that are not active anymore or are already accepted by someone will no longer be visible on your app. Only rides that are active and near you will be visible and you will be able to accept them.

Why you're not getting requests:
- There is no problem with your application
- It's just a matter of supply and demand
- Too many drivers at your location
- Low passenger demand in your area
- Wrong time of day

What to do:
- Please be patient, ride requests are coming
- Do not stand and wait for orders
- Move around and search for orders
- Be near places that are known to have a large presence of people

Better locations:
- Shopping centers
- Office areas
- Transport hubs (bus/train stations)
- Hospitals
- Restaurants
- Hotels

Better times:
- Morning rush (6-9 AM)
- Evening rush (4-8 PM)
- Weekends
- Late nights

Remember:
- Supply and demand is normal
- Movement helps more than waiting
- Accept only profitable rides
- Quality over quantity`,
      conditions: "Ride availability depends on supply and demand in your area.",
      prevention: "Work during peak hours in high-demand areas for consistent requests."
    },

    {
      id: "sol-request-notifications",
      title: "Not Getting Ride Request Notifications / Sound",
      tags: ["Technical", "Technical issues", "Notification issue"],
      opening: "Let me help you fix your ride request notification sound.",
      empathy: "Missing notifications means missing rides. Let's get this working.",
      solution: `How to enable ride request notifications:

Steps:
1. While in Driver mode, make sure you are on the main screen
   - Tap menu, then "City"

2. Tap the settings button on the top right of the screen (shaped like a gear)

3. Look for "New ride request notifications" setting and make sure that it is turned on

Additional checks:
- Check phone is not on silent mode
- Check notification volume is turned up
- Make sure inDrive has permission for notifications
- Restart the app if notifications still not working

For Android:
1. Open Settings
2. Go to Apps & notifications
3. Find inDrive
4. Select Notifications
5. Turn on Sound
6. Check volume level

For iPhone:
1. Open Settings
2. Go to Notifications
3. Find inDrive
4. Turn on notifications
5. Check sound is enabled`,
      conditions: "Notifications require proper app permissions and phone sound settings.",
      prevention: "Regularly check notification settings to ensure you don't miss rides."
    },

    {
      id: "sol-low-prices",
      title: "Prices Are Too Low / Earning Complaint",
      tags: ["Earning", "Earnings", "Low prices"],
      opening: "I understand you feel the prices are too low. Let me explain how this works.",
      empathy: "I get it - you want better earnings. Let me help you earn more.",
      solution: `How pricing works:

Important:
We at inDrive do not decide the fare of the ride. The fare is proposed by the passenger and the driver accepts the fare only if he considers it appropriate.

What this means:
- All ride requests will be shown in your profile
- YOU choose which rides to accept
- You can decline orders that are not suitable for you
- You are NEVER forced to accept any ride
- Your earnings are in YOUR control

How to make more money:

Accept only profitable rides:
1. Look at each offer
2. Check distance and payment
3. Only accept rides that pay well
4. Decline rides that don't pay enough

Work at right times:
- Prices are usually higher during peak hours
- Morning and evening rush = better pay
- Weekends = better pay
- Bad weather = better pay

Move to good locations:
- Busy areas have more offers
- More offers = pick the best ones
- Shopping areas = high demand
- Office areas = high demand
- Transport hubs = high demand

Important:
- Please do not cancel the orders after accepting them
- Accept only what you intend to complete
- Your ratings affect your future ride offers`,
      conditions: "Fares are set by passengers. You control which rides to accept.",
      prevention: "Only accept rides that meet your profit expectations."
    },

    {
      id: "sol-third-party-apps",
      title: "Third-Party Apps & Auto-Clickers - Disabled",
      tags: ["Account", "Violations", "Third party apps"],
      opening: "Let me explain why third-party apps and auto-clickers are not allowed.",
      empathy: "I understand you might want tools to help, but these are not allowed.",
      solution: `Why we don't allow third-party apps:

Problems they cause:
1. This introduces inequality in the possibility of taking orders
2. Such tools provide third parties access to your personal information
3. Such tools provide third parties access to your payment information
4. Violates our terms of service

What is an auto-clicker:
An autoclicker is an application that performs a series of actions for you in the application. For example, automatically taking orders.

How to disable auto-clickers:

Steps:
1. Open your device settings
2. Tap Apps & notifications – Show all apps
3. Scroll down the list and select "Play Store"
4. Click Storage
5. Click "Clear cache"
6. Select "Erase Data"
7. Open the Play Store and try downloading the app again

Why you don't need them:
- Accepting rides manually takes only seconds
- You get to choose which rides to accept
- You control your income quality
- Your account stays safe
- No risk of permanent ban

Important:
- inDrive does not encourage the use of such services
- Always accept rides manually
- Keep your account secure`,
      conditions: "Using third-party apps violates terms of service.",
      prevention: "Never use auto-clickers or third-party apps. Accept rides manually."
    },

    {
      id: "sol-internet-issue",
      title: "Internet Connection Issues / App Problems",
      tags: ["Technical", "Technical issues", "Internet issue"],
      opening: "Let me help you fix internet connection problems with inDrive.",
      empathy: "Internet issues can stop you from earning. Let's get this fixed.",
      solution: `How to troubleshoot internet issues:

Quick fixes:
1. Restart the inDrive application
2. Restart the internet on your device
3. Change the internet connection
   - Try mobile data instead of WiFi
   - Or try WiFi instead of mobile data

Detailed steps:

Go to application settings on your phone:
1. Open Settings
2. Go to Apps (or Applications)
3. Search for "InDrive" app
4. Go to Storage
5. Click "Clear data" or "Clear cache"

Additional troubleshooting:
1. Search for the InDrive app
2. Go to storage
3. Click "Clear cache"
4. Restart the application

Still having issues?
- Check if your internet plan is active
- Check data balance if on mobile
- Try in a different location
- Contact your internet provider
- Restart your router if using WiFi`,
      conditions: "Internet issues require stable connection. Both WiFi and mobile data work.",
      prevention: "Keep your internet stable while using inDrive."
    },

    {
      id: "sol-passenger-how-to-request",
      title: "Instructions for Passengers - How to Request a Ride",
      tags: ["Passenger", "Ride request", "Passenger guide"],
      opening: "Let me explain how passengers request rides on inDrive.",
      empathy: "Understanding how passengers book helps you serve them better.",
      solution: `How to request for a ride (For Passengers):

Steps:
1. Go to "BIKE/CAR" through the side menu or the main order form
2. Fill out the order form with pickup and drop-off locations
3. Expect offers from drivers (you will receive notifications)
4. Review the offers from different drivers and choose the one that suits you
5. Contact the driver for details
6. Complete the trip at the end of your arrival at point B

Have a nice trip!

This helps you understand:
- Why passengers might not show up
- Why they might cancel
- Why they might ask questions
- How to provide better service to them`,
      conditions: "Passengers set their own offer price.",
      prevention: "Understanding the passenger process helps improve service."
    },

    {
      id: "sol-courier-complete",
      title: "Courier - How to Complete or Cancel Order",
      tags: ["Courier", "Delivery", "Complete/cancel order"],
      opening: "Let me help you complete or cancel a courier order.",
      empathy: "Courier orders need clear completion steps. I'll guide you.",
      solution: `If your courier order is stuck:

Important:
Please note that you must be present at the place where the trip ends.

Steps to complete or cancel:

1. Click on the "Order Problems" button
   - This is in the order details

2. Then click on "The request could not be completed"
   - This opens your options

3. Your options:
   - Complete the order (if you delivered)
   - Cancel the order (if you couldn't deliver)

4. Provide your reason and submit

How to complete courier rides (driver):

Dear user, kindly follow these steps and you'll be able to complete or cancel your order:
- Please note that you must be present at the place where the trip ends and follow the following:
- Click on the Order Problems button
- Then click on the request could not be completed
- Complete the order or cancel the order

Important points:
- You must be AT the delivery location
- Take photo if relevant
- Honest communication is required`,
      conditions: "You must be at delivery location to mark complete.",
      prevention: "Complete all steps before marking order complete."
    },

    {
      id: "sol-insurance-claim",
      title: "How to Claim Insurance / Accident Claims",
      tags: ["Safety", "Accidents", "Insurance claim"],
      opening: "If you face any accidents, we can help you with insurance claims.",
      empathy: "I understand accidents are stressful. We're here to help you.",
      solution: `How to claim insurance:

If you face any accidents:

How to submit claim:
Email us at https://indrive.com/contacts/support with the following:

Required documents:
1. Police report
2. Hospital reports (if injured)
3. Ride details (from app)
4. Your contact information
5. Photos of damage (if applicable)
6. Witness information (if available)

What to include in email:
- Date and time of accident
- Location of accident
- Other vehicles/people involved
- Detailed description of what happened
- Your injuries (if any)
- Damage to your vehicle

Processing:
- Our team will contact you
- We'll review your claim
- We'll ask for additional info if needed
- We'll process your claim
- We'll provide compensation

Important:
- Report immediately after accident
- Keep all documents
- Be honest in claim
- Follow up with our team`,
      conditions: "Insurance claims require documentation and timely reporting.",
      prevention: "Drive safely and follow traffic rules to avoid accidents."
    },

    {
      id: "sol-delete-account",
      title: "How to Delete Your Account / Account Deletion",
      tags: ["Account", "Account settings", "Delete account"],
      opening: "If you want to delete your account, I can guide you through it.",
      empathy: "I understand if you want to leave inDrive. Let me help with the process.",
      solution: `To delete your account:

You need to send a formal request email to:
https://indrive.com/en/contacts/support/

What to write:
"I, [Your Full Name], driver's license number [Your License Number], phone number [Your Phone with country code], hereby withdraw my consent to the processing of my personal data by the inDrive service."

How to submit:
1. Go to: https://indrive.com/en/contacts/support/
2. Fill out the form
3. Enter your registered mobile number
4. Enter your personal email address
5. In the message, paste the withdrawal text with your details
6. Submit

Processing:
- Our team will verify your identity
- We'll process your request
- We'll delete your data
- We'll confirm deletion
- Usually takes 10-15 business days

What happens after deletion:
- Your account will be closed
- Your data will be deleted
- You won't be able to log in
- You'll lose access to your earnings

Before deleting:
- Withdraw all your balance
- Complete or cancel pending orders
- Make sure you won't need earnings

Important:
- This is permanent
- Data will be deleted
- You'll need to re-register if returning
- All history will be gone`,
      conditions: "Account deletion is permanent. Data will be completely removed.",
      prevention: "Contact support before deleting if you have questions."
    }
  ]
};
