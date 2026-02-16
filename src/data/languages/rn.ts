// Nepali Language Data File (Romanized)
export const NP = {
  // Navigation & UI (Kept in English as requested)
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
        "Namaste 👋, inDrive support ma swagat chha. Ma Pramod hu. Bhannuhos na, aaja ma hajur lai kasari sahayog garna sakchhu?",
      ]
    },
    empathy: {
      number: "2️⃣",
      title: "Empathy / Reassurance (For Both)",
      lines: [
        "Oho! Hajur lai pareko yo samasya prati ma ekdamai dukhi chhu. Tara chinta nalinuhos hai, hami milera yesko samadhan nikalnechhau.",
        "Ma bujhna sakchhu hajur lai kati gahro bhayo hola. Ma hajur ko samasya samadhan garna aafno purna prayas garnechhu la."
      ]
    },
    requestInfo: {
      number: "3️⃣",
      title: "Requesting Extra Information (Only If Needed)",
      lines: [
        "Hajur ko samasya ajha ramrosanga bujhna ko lagi k tyo samasya ko euta screenshot pathauna saknuhunchha?",
        "Hajur ko thyakkai k saman harayeko ho ra kaha harayeko jasto lagchha? Alikati bistrit ma bataunus na hai.",
        "Hajur le samasya ko barema ali khulaera bhannubhayo bhane malai check garna sajilo hune thiyo."
      ]
    },
    checking: {
      number: "4️⃣",
      title: "While Checking / Escalation (For Both)",
      lines: [
        "Jankari dinubhayeko ma dhanyabad. Ma ekchoti system ma check garihalchhu la? Ekai chin line ma basnuhos hai.",
        "Maile hajur ko kura sambandhit team lai pathaidiyeko chhu. Uhaharu le herera chhitai khabar garnuhunchha.",
        "Dhairya garera parkhidinubhayeko ma dherai dhanyabad hai."
      ]
    },
    resolution: {
      number: "5️⃣",
      title: "Resolution / Confirmation (For Both)",
      lines: [
        "Hajur ko samasya samadhan bhaisakeko chha. Ekchoti hajur le pani check garnus ta, ani sabai milyo ki milena malai bhannuhos la.",
        "Maile hajur ko case mathillo nikaya ma forward garidiyeko chhu. Aba chadai nai hajur le update paunuhunechha."
      ]
    },
    anythingElse: {
      number: "6️⃣",
      title: "Asking Anything Else (For Both)",
      lines: [
        "K aaja maile hajur lai maddat garna sakne aru kehi chha?"
      ]
    },
    closing: {
      number: "7️⃣",
      title: "Closing / Sign-Off (For Both)",
      lines: [
        "Hajur lai aru kehi sodhnu parema wa sahayog chaiyema dhukka bhaera feri samparka garnuhola hai. App ko 'Help' option bata pani hami lai bhetna saknuhunchha. Hami sadhai hajur ko sewa ma chhau.",
        "inDrive ma samparka garnubhayeko ma dhanyabad. Hajur ko din subha ra surakshit rahos!",
        "Hajur ko tarfa bata kehi jawab na-aayeko le ma yo chat ahile lai yahi tungyaudai chhu hai. Pachi kehi paryo bhane feri samjhinuhola. Hami sadhai hajur ko sath ma chhau, dhanyabad."
      ]
    }
  },

  // 21 Solutions (Consolidated, No Duplicates)
  solutions: [
    {
      id: "sol-download-app",
      title: "How to Download inDrive App",
      tags: ["Account", "Registration", "Download app"],
      opening: "inDrive ma jodiera kamauna chahanubhayeko ma dherai khusi lagyo! Yo ekdam sajilo chha. Hajur le hamro app download garera 'Driver Mode' ma switch garnuparchha.",
      empathy: "Naya kaam suru garna lagnubhayeko ma badhai chha! Ma hajur lai app rakhna sikauchhu la.",
      solution: `Hajur le yahabata app download garna saknuhunchha:

iPhone (iOS) ho bhane:
https://apps.apple.com/app/inDrive/id780125801

Android mobile ho bhane:
https://play.google.com/store/apps/details?id=sinet.startup.inDriver

Download bhaepachi yaso garnuhos:
1. App kholnuhos.
2. 'Driver Mode' ma januhos.
3. Mageko kagajpatra haru upload garnuhos.
4. La aba hajur kaam suru garna tayar hunubhayo!`
    },

    {
      id: "sol-register-car",
      title: "How to Register Your Car & Upload Documents",
      tags: ["Account", "Registration", "Vehicle registration"],
      opening: "Driver mode ma gaera hajur le kagajat ra gadi ko photo halna saknuhunchha. App le je-je bhancha, tyo follow gardai janus hai.",
      empathy: "Darta prakriya ali jhanjhatilo lagna sakcha, tara ma hajur lai sajilo tarika le bujhauchhu.",
      solution: `inDrive ma gadi darta garna yi kagajat haru tayar parnuhos la:

Ke-ke chaincha?
1. Hajur ko aafno photo
2. Gadi ko prasta photo
3. Bluebook
4. Taxi anumati (cha bhane matra)
5. Police Report
6. Driving License
7. Nagarikta wa Aadhar Card
8. License hatama samatera khicheko selfie

Kasari upload garne?
1. inDrive app kholera 'Driver Mode' ma januhos.
2. 'Documents' ma januhos.
3. Kagajat haru ko photo prasta aaune gari khichera halnuhos.
4. Verify nabhaye samma ekchin parkhanuhos.

Kehi confusion bhaema hamilai support@inDrive.com ma mail garna pani saknuhunchha hai.`,
      conditions: "Kagajat haru sakkali ra myad nanagheko hunuparcha hai.",
      prevention: "Pachi samasya na-aawos bhanera aafno document sadhai update rakhnuhola."
    },

    {
      id: "sol-change-number",
      title: "How to Change Phone Number",
      tags: ["Account", "Profile", "Change phone"],
      opening: "Eh, mobile number ferna parne bhayo? Hunchha, ma hajur lai yesma maddat garchhu.",
      empathy: "Aafno account surakshit rakhna number update garnu ekdam ramro bani ho.",
      solution: `Number ferna ko lagi hajur le hamilai yi bibaran pathauna parcha:
1. Ahile chaliraheko (purano) number
2. Aba rakhna chaheko (naya) number
3. Aafno license hatama samatera khicheko euta selfie (yo chai hajur nai ho bhanera chinna ko lagi ho)

Kasari pathaune?
1. Yo link ma janus: https://indrive.com/en/contacts/support/
2. Tyaha ko form bharnuhos.
3. License wala selfie photo pani halnuhos.
4. Ani 'Submit' garidinus.

Hamro team le 24 dekhi 48 ghanta bhitra hajur ko number milaidinechha.`,
      conditions: "Selfie khichda anuhar ra license ko akshar prasta dekhinu parcha la.",
      prevention: "Account ko surakshya ko lagi aafnai number matra prayog garnus hai."
    },

    {
      id: "sol-change-vehicle",
      title: "How to Change Vehicle / Car Information",
      tags: ["Account", "Profile", "Change vehicle"],
      opening: "Hajur le app bhitrai bata aafno gadi ko bibaran sachyauna milcha ni.",
      empathy: "Naya gadi wa bibaran fernu sajilo chha. Ma sikaihalchhu.",
      solution: `Gadi ko bibaran yesari fernuhos:

1. inDrive app kholnuhos.
2. Debrepatti mathi menu ma aafno photo ma thichnuhos.
3. Tyaha bata hajur le gadi ko model, rang, number plate ra baneko saal sachyauna saknuhunchha.
4. Antim ma 'Save' garna nabirsinus hai.

Yadi system le kagajpatra magyo bhane:
1. Naya gadi ko kagaj upload garidinus.
2. Gadi ra number plate ko photo halnus.
3. 24-48 ghanta ma verify huncha, ani hajur le mail paunuhunechha.`,
      conditions: "Gadi hajurkai naam ma wa chalaune anumati bhayeko hunuparcha.",
      prevention: "Gadi fernasath app ma pani update garihalnus hai, pachi lafada hudaina."
    },

    {
      id: "sol-lost-item",
      title: "Item Lost in Vehicle / Lost Property",
      tags: ["Other", "Lost & Found", "Lost item"],
      opening: "Namaste! Oho saman chutyo? Na-aattinus, kahilekahi yasto hunchha.",
      empathy: "Saman haraunda kati tanab hunchha ma bujhchhu. Hami khojna ko lagi sakdo prayas garnechhau la.",
      solution: `Hajur ko saman khojna hamilai yi kura haru bataunus ta:
1. Booking garda kun number prayog garnubhayeko thiyo?
2. Kun din ra kati baje yatra garnubhayeko thiyo?
3. K saman harayeko ho? Kasto dekhinchha?

Yesari report garnus:
1. Yaha januhos: https://indrive.com/en/contacts/support/
2. 'Lost Item' form bharnuhos.
3. Mathiko sabai bibaran lekhnuhos.
4. Pathaunuhos.

Hami turuntai driver sathi lai samparka garera hajur lai khabar garnechhau.`,
      conditions: "Prayaso saman 24 ghanta bhitra bhetinchan.",
      prevention: "Gadi bata orlinu aghi ekchoti seat ma herne bani basalnus hai."
    },

    {
      id: "sol-passenger-refund",
      title: "Passenger Didn't Show Up - Get Refund",
      tags: ["Earning", "Refund", "Non-arrival refund"],
      opening: "Location ma pugda pani yatri aaenan? Yasto bela hajur le tireko service charge firta paunuhunchha.",
      empathy: "Yatri na-auda hajur ko samaya ra tel naas hunchha, yo hami bujhchhau. Tyahi bhaera hami refund dinchhau.",
      solution: `Paisa firta (Refund) paune tarika:

Sadhai yaso garnus hai:
1. Yatri bhayeko thau ma pugne bittikai "I've arrived" thichihalnus.
2. 5 minute kurnus, yadi yatri aaunubhayena bhane ride cancel garidinus.
3. Karan chhanda "Passenger didn't show up" chhannuhola.

Paisa kahile aaucha?
- Praya: 8 ghanta bhitra app kai balance ma paisa firta aaucha.
- Tyo paisa pachi bank ma tanna milcha.

Yadi mathiko process milena bhane (Manual tarika):
- App batai refund request pathaunus.
- Tara yaad garnus hai, yo manual tarika ekpatak matra prayog garna paincha.

Mahatwapurna:
- Pugne bittikai "I've arrived" thichnai parcha, natra hajur tyaha pugnubhayeko ho ki haina hamilai thaha hudaina.`,
      conditions: "Niyam follow garnubhayo bhane paisa aafai firta huncha.",
      prevention: "Location ma pugnasath 'I've arrived' thichna nabirsinuhola."
    },

    {
      id: "sol-passenger-not-paying",
      title: "Passenger Not Paying / Non-Payment",
      tags: ["Earning", "Payment", "Non-payment"],
      opening: "Ride sakiyo tara yatri le paisa diyenan? Yo ta ekdam naramro bhayo. Ma herihalchhu.",
      empathy: "Dukha garepachi paisa napauda ris uthnu swabhavik ho. Hajur ko paisa dilauna hami pahal garnechhau.",
      solution: `Yatri le paisa nadiyema k garne?

Pahila payment check garau:
1. 'Ride History' ma gaera tyo ride hernus.
2. Payment 'Pending' dekhayeko cha ki chaina?

Kahilekahi yasto huncha:
- Online payment garda paisa aauna 8 dekhi 24 ghanta lagna sakcha.
- Tyo paisa hajur ko app ko wallet ma jamma huncha.

Yadi paisa audai aayena bhane:
1. Yo link ma janus: https://indrive.com/en/contacts/support/
2. Complain darta garnus (Ride ID, miti ra paisa na-aayeko screenshot rakhera).
3. Submit garnus.

Hami yatri lai phone garera paisa tirna lagauchhau. Yadi manenan bhane uniharu ko account banda huna sakcha ra hajur lai hami kshatipurti dina sakchhau.`,
      conditions: "Hami 7 din bhitra yesko chinofano garchhau.",
      prevention: "Gadi bata yatri orlinu aghi nai payment confirm garnus hai."
    },

    {
      id: "sol-top-up-balance",
      title: "How to Top Up Balance / Add Money",
      tags: ["Account", "Payment & billing", "Top up issue"],
      opening: "Wallet ma balance sakiyo? Kehi chaina, ma hajur lai top-up garna sikauchhu.",
      empathy: "Kaam narokiyos bhanera recharge garna lagnubhayeko, ekdam ramro. Yo dherai sajilo chha.",
      solution: `Wallet recharge garne sajilo tarika:

Yaso garnus:
1. App ko 'Wallet' option ma janus.
2. "Top up" ma thichnus.
3. Tyaha dekhine hajur ko inDrive account number copy garnus.
4. "Top up via Khalti Pay" button thichnus.
5. Aba Khalti app khulcha.
6. inDrive ko logo khojera tyasma thichnus.
7. Aghi copy gareko account number halnus.
8. Kati paisa halne ho (kamti ma 100 ru) type garera payment garnus.

Khalti account chaina bhane:
- Youtube ma video herera account banauna saknuhunchha wa sathi ko bata halna lagaunus.

Paisa halne bittikai wallet ma dekhincha ra hajur le kaam suru garna milihalcha.`,
      conditions: "Kamti ma 100 rupaiya halnu parcha la.",
      prevention: "Kaam ko bichama balance nasakiyos bhanera pahile nai recharge garera rakhnu ramro."
    },

    {
      id: "sol-withdraw-balance",
      title: "How to Withdraw Full Balance to Bank",
      tags: ["Account", "Payment & billing", "Full withdrawal"],
      opening: "Wallet ko paisa bank ma tanna man lagyo? Hunchha, ma prakriya batauchhu.",
      empathy: "Aafno kamai hat parna khojnubhayeko, ma bujhchhu. Ma hajur lai maddat garchhu la.",
      solution: `Bank ma paisa transfer garna yi kura haru chaincha:

Kagajat haru:
1. Refund form (karan khulaera sign gareko hunuparcha)
2. Hajur ko selfie (license samateko)
3. Bank khata ko bibaran
4. Bank statement (jasma SWIFT code hos)

SWIFT code bare:
- Yo code bank ko website ma wa checkbook/statement ma huncha.
- Yo 8 wa 11 akshar ko huncha, ramrosanga herera rakhnus hai.

Bujhaune thau:
1. https://indrive.com/contacts/support ma janus.
2. Withdrawal form bharera document haru upload garnus.

Kati samaya lagcha?
- Hamro team le 5-7 din bhitra hajur ko bank khata ma paisa pathaidincha.
- Paisa aayepachi hajur lai mail pani aaucha.`,
      conditions: "Kagajat prasta bhaena bhane reject huna sakcha, dhyan dinus hai.",
      prevention: "Bank bibaran bharda ekchoti dohoraera check garnuhola."
    },

    {
      id: "sol-location-wrong",
      title: "My Location is Showing Wrong / GPS Issue",
      tags: ["Technical", "Technical issues", "Location issue"],
      opening: "Location galat dekhayo? Yo prayaha GPS ko karan le huncha. Ma milaidinchhu.",
      empathy: "Location bigriyo bhane yatri pauna gahro huncha, ma bujhchhu. La yeslai thik parau.",
      solution: `Location thik parna yaso garera hernus ta:

Setting milaunus:
Settings > Apps > inDrive > Permissions ma gaera 'Location' on cha ki chaina hernus.

Phone refresh garnus:
1. Setting ma gaera location ekpatak 'OFF' garnus.
2. Mobile switch off garera feri on (Restart) garnus.
3. Aba location 'ON' garnus ra app kholnus.

Yadi ajhai chalena bhane:
- Ghar bhitra hunuhunchha bhane bahira khulla thau ma janus (GPS le bahira ramro kaam garcha).
- Wifi banda garera data chalaera hernus ta.

Yati garda pani bhaena bhane bhannus la, ma aru upaya khojchhu.`,
      conditions: "Thula ghar wa kotha bhitra huda GPS le kahilekahi kaam gardaina.",
      prevention: "Ride lida sadhai location 'High Accuracy' ma rakhnus hai."
    },

    {
      id: "sol-no-ride-requests",
      title: "Why Am I Not Getting Ride Requests / No Orders",
      tags: ["Earning", "Ride issues", "No ride requests"],
      opening: "Ride request nai aayena? Dikka lagyo hola. Kin yasto bhairaheko cha ma batauchhu la.",
      empathy: "Online basda pani kaam na-aaunu ta tanab kai kura ho. Tara chinta nalinus, kehi upaya haru chan.",
      solution: `Ahile app ma alikati pariwartan bhayeko cha:
Aba hajur ko najikai bhayeka ra 'Active' ride haru matra dekhinchan. Aru le li-sakeko ride haru aba dekhidainan.

Kin ride aayena ta?
- Hajur ko app ma kehi kharabi chaina, dhukka hunus.
- Sayad ahile tyo area ma yatri kam chan wa driver sathi haru dherai hunuhunchha.

Aba k garne ta?
- Ekai thau ma nabasnus, ali chahalpahal hune thau tira janus.
- Shopping mall, office area, bus park wa chowk tira badhi request aaucha.

Katibela kaam garne?
- Office jane bela (Bihan 9-11) ra chutne bela (Beluka 4-7) ma dherai ride paincha.
- Pani pareko bela ra chadparva ma pani ramro kamai huncha.

Dhairya garnus hai, ride pakka aaucha!`,
      conditions: "Ride aaunu bhaneko yatri ko maag ma bhar parne kura ho.",
      prevention: "Khali samaya ma dherai manche hune thau tira sarne bani basalnus."
    },

    {
      id: "sol-request-notifications",
      title: "Not Getting Ride Request Notifications / Sound",
      tags: ["Technical", "Technical issues", "Notification issue"],
      opening: "Request aayeko pattai paiyena? Aawaj na-aaera hola. Ma check garna sikauchhu.",
      empathy: "Notification na-auda ramro ride chutna sakcha. La yeslai milaihalau.",
      solution: `Aawaj aaune banauna yaso garnus:

App bhitra check garnus:
1. Driver mode ko screen ma mathi kunama bhayeko 'Setting' (Gear Icon) ma janus.
2. "New ride request notifications" on cha ki chaina hernus.

Mobile ko setting pani hernus:
- Mobile 'Silent' wa 'Vibration' ma ta chaina?
- Volume badhaunus.

Android mobile ho bhane:
Settings > Apps > inDrive > Notifications ma gaera 'Sound' on garidinus.

iPhone ho bhane:
Settings > Notifications > inDrive ma gaera 'Allow Notifications' ra 'Sounds' on garnus.

Yati garepachi pakka bajcha!`,
      conditions: "Mobile ko sound ra app ko permission dubai mileko hunuparcha.",
      prevention: "Kaam suru garnu aghi ekchoti ringtone bajcha ki bajdaina check garnus hai."
    },

    {
      id: "sol-low-prices",
      title: "Prices Are Too Low / Earning Complaint",
      tags: ["Earning", "Earnings", "Low prices"],
      opening: "Bhada kam bhayo bhanne hajur ko gunaso maile bujhe. inDrive ma bhada kasari tokincha ma prasta parchu hai.",
      empathy: "Mahangi ko jamana cha, hajur le ramro kamai garna khojnu jayaj ho. Ma chu ni maddat garna.",
      solution: `Bhada ko kura yasto cha:

Khasma inDrive le bhada tokdaina. Yatri le "Ma yati dinchu" bhanchan, ani hajur le "Huncha" wa "Hunna" bhanna paunuhunchha.

Yesko faida k ta?
- Kun ride line bhanne hajurkai hatma huncha.
- Faida nahune jasto lagyo bhane tyo ride naliye pani huncha, kasaile kar gardaina.
- Hajur le pani aafno bhada offer (Counter Offer) garna milcha.

Dherai kamauna k garne?
- Hatar nagarnus, ramro bhada dine ride matra rojnus.
- Peak Hour wa pani pareko bela yatri le badhi paisa tirchan, tyatibela badhi khatnus.
- Aafno rating ramro banaunus, ramro rating bhayekalai ramro offer aaucha.

Hajur aafai malik ho, tyasaile aafu lai ghata nahune gari chalaunus hai.`,
      conditions: "Yaha molmolai garna paincha, antim nirnaya hajurkai ho.",
      prevention: "Chitta nabujheko ride nalida nai ramro huncha."
    },

    {
      id: "sol-third-party-apps",
      title: "Third-Party Apps & Auto-Clickers - Disabled",
      tags: ["Account", "Violations", "Third party apps"],
      opening: "Auto-clicker wa aru app chalauna kin mildaina ma samjhauchhu la.",
      empathy: "Kaam sajilo hos bhanera yasto app chalauna khojnubhayeko hola, tara yo alikati risky huncha.",
      solution: `Kin yasto app chalaunu hudaina?

1. Yo chalaunda imandar driver sathi haru lai anyaya huncha.
2. Yasto app le hajur ko mobile ko data ra password chori garna sakcha.
3. Company le thaha payo bhane hajur ko account sadhai ko lagi banda (Block) huna sakcha.

Yadi mobile ma cha bhane yesari hataunus:
1. Setting ma gaera app manager ma janus.
2. Shankaspad app haru delete (Uninstall) garnus.
3. Play Store ko 'Clear Cache' garnus.

Surakshit rahanus:
- Aafnai hatle ride thichnus, kehi second ta lagcha.
- Yesle hajur ko account pani jogincha, kamai pani rokidaina.`,
      conditions: "Niyam biparit app chalayeko bhetiyema account banda huncha hai.",
      prevention: "Choto faida ko lagi account jokhim ma naparnus, imandari le kaam garnus."
    },

    {
      id: "sol-internet-issue",
      title: "Internet Connection Issues / App Problems",
      tags: ["Technical", "Technical issues", "Internet issue"],
      opening: "Net chalena wa app ghumyo? Tanab nalinus, ma thik parne upaya sikauchhu.",
      empathy: "Internet le dhoka dida kaam rokincha, kati ris uthcha malai thaha cha. La try garau.",
      solution: `Net nachalda yaso garera hernus:

Chito hune upaya:
1. inDrive app purai banda garera feri kholnus.
2. Mobile ko data off garera on garnus.
3. Data chalena bhane Wifi try garnus ta.

App ko 'Cache' safa garnus:
1. Mobile ko Settings > Apps > inDrive ma janus.
2. Storage ma thichnus.
3. 'Clear Cache' ma click garnus (Clear Data nagarnus hai, logout huncha).
4. Aba app chalaera hernus.

Yadi ajhai bhaena bhane:
- Data pack sakiyo ki? Check garnus.
- Mobile ekchoti switch off garera on garnus.

Prayaha yati garepachi majjale chalcha!`,
      conditions: "App ramrosanga chalna internet speed ramro hunuparcha.",
      prevention: "Ride suru garnu aghi data balance cha ki chaina hernus hai."
    },

    {
      id: "sol-passenger-how-to-request",
      title: "Instructions for Passengers - How to Request a Ride",
      tags: ["Passenger", "Ride request", "Passenger guide"],
      opening: "Yatri le kasari ride book garchan bhanne janna man lagyo? Ma batauchhu.",
      empathy: "Yatri ko tarika bujhnubhayo bhane hajur lai deal garna sajilo huncha ni.",
      solution: `Yatri le ride book garne tarika yasto huncha:

1. Uniharu le app kholera kaha jane ho location halchan.
2. "Ma yati rupaiya dinchu" bhanera bhada lekhchan.
3. Ani request pathauchan.
4. Tyaspachi hajur haru ko mobile ma ghanti bajcha.
5. Yatri le hajur ko photo, gadi ra hajur le gareko offer herera "La yo driver thik cha" bhanera chanchan.
6. Ani balla ride fix huncha.

Subha Yatra!

Yo kura bujhnubhayo bhane yatri sanga bargaining garna sajilo huncha hai.`,
      conditions: "Yatri le aafno ichchha anusar bhada prastav garna pauchan.",
      prevention: "Yatri ko thauma basera sochnubhayo bhane ramro service dina sakincha."
    },

    {
      id: "sol-courier-complete",
      title: "Courier - How to Complete or Cancel Order",
      tags: ["Courier", "Delivery", "Complete/cancel order"],
      opening: "Courier order kasari sakaune wa cancel garne? Ma sikauchhu la.",
      empathy: "Saman puryaune kaam jimmevaripurna huncha. Prakriya nabigriyos bhanera ma maddat garchhu.",
      solution: `Yadi courier order ma kehi samasya aayo bhane:

Order pura (Complete) wa radda (Cancel) garna:
1. Order ko bibaran ma bhayeko "Order Problems" button thichnus.
2. "The request could not be completed" ma janus.
3. Aba duita option aaucha:
   - Delivery bhayo bhane: 'Complete' garnus.
   - Delivery bhaena bhane: 'Cancel' garnus.

Dhyan dinus hai:
- Yo kaam garna hajur saman puryaune location mai hunuparcha.
- Saman diyeko photo khichera rakhnus, pachi praman chaincha.
- Je bhayeko ho sancho kura bhannus la.`,
      conditions: "Location ma napugi 'Complete' garna mildaina.",
      prevention: "Saman sambandhit manche lai bujhayepachi matra app ma entry garnus."
    },

    {
      id: "sol-insurance-claim",
      title: "How to Claim Insurance / Accident Claims",
      tags: ["Safety", "Accidents", "Insurance claim"],
      opening: "Durghatana paryo? Oho! Bhagwan ko kripa le hajur surakshit hunuhunchha hola. Bima dabi garna ma saghauchhu.",
      empathy: "Yo ekdam dukhad ghadi ho. Hami hajur ko sath ma chhau, chinta nalinus.",
      solution: `Bima (Insurance) dabi garna yaso garnus:

Turuntai hamilai mail pathaunus:
Link: https://indrive.com/contacts/support

Mail ma yi kagajat pathaunuparcha:
1. Police Report (yo anibarya cha)
2. Hospital ko kagajpatra (chot lageko cha bhane)
3. App ma dekhiyeko ride ko bibaran
4. Hajur ko phone number
5. Gadi ma bhayeko kshati ko photo

Mail ma k lekhne?
- Ghatana kahile ra kaha bhayo?
- Galti kasko thiyo wa kasari bhayo?
- Hajur lai wa gadi lai ke kati kshati bhayo?

Hami hajur ko mail herne bittikai samparka garnechhau ra kshatipurti dilauna pahal garnechhau.`,
      conditions: "Prahari report bina bima dabi garna mildaina hai.",
      prevention: "Sadhai bistarai ra hosiyar bhaera chalaunus, jyan bhanda thulo kehi chaina."
    },

    {
      id: "sol-delete-account",
      title: "How to Delete Your Account / Account Deletion",
      tags: ["Account", "Account settings", "Delete account"],
      opening: "Account nai delete garna khojnubhayeko? Kin hola? Je hos, ma tarika sikaidinchhu.",
      empathy: "Hajur le hamilai chodna lagnubhayeko ma naramailo lagyo. Tara hajur ko nirnaya ko samman garchhu.",
      solution: `Account hatauna hamilai euta request pathaunuparcha:

Yaha janus: https://indrive.com/en/contacts/support/

Message box ma yo kura lekhnus:
"Mero naam [Hajur ko naam] ho, license number [number] ra mobile number [number] ho. Ma mero inDrive account ra sabai data sadhai ko lagi hatauna chahanchhu."

Aba k huncha?
- 10-15 din bhitra hajur ko account banda huncha.
- Tyaspachi hajur ko sabai record ra point haru harauchan.
- Pachi feri chalauna man lagyo bhane suru dekhi naya darta garnuparcha.

Euta sallaha:
Account delete garnu aghi wallet ma bhayeko paisa jhiknus hai, natra tyo pani jancha.`,
      conditions: "Ekchoti delete garepachi data haru firta lyauna mildaina.",
      prevention: "Kehi samasya bhaera chodna lagnubhayeko ho bhane baru ekchoti hami sanga sallaha garnus na."
    }
  ]
};