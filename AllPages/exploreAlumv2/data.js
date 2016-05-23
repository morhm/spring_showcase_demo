
/* jshint node: true */
/*
 * Model data for CS142 Project #5 - the photo sharing site.
 * This module returns an object called cs142Models with the following functions:
 *
 * cs142Models.userListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.userModel - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * cs142Models.photoOfUserModel - A function that returns the photos belong to
 * the specified user. Called  with an user ID (id), the function returns an object containing:
 *   _id  (string) - The ID of the photo
 *   date_time (date) - he date and time the picture was taken in ISO format.
 *   file_name (string) - The file name in the image directory of the picture.
 *   user_id (string) - The user id of the picture's owner.
 *   comments: {array of objects} - An array of comment objects containing the properties:
 *        _id  (string) - The ID of the comment.
 *        date_time (date) - The date the comment was made in ISO format.
 *        comment (string) - The text of the comment.
 *        user: {object} The user info (see userMode for format) who made the comment
 *        photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * cs142Models.schemaModel - A function that returns the test info from the fake schema.
 *                           The function returns an object containing:
 *   _id (string) - The ID of the schema
 *   __v (number) - The version number
 *   load_date_time (date) - The date the schema was made in ISO format.
 *
 * 
 */
(function() {

var text = '{ "-KHWGe-11kVt876Gnen4xx" : {"about" : "Political Science, Marching Band, Hermanas Unidas", "email" : "", "firstname" : "Edna", "lastname" : "Gregorio", "phone" : "", "plans" : "Senior, UC Berkeley", "youtube" : "XhbQcskAq4I"}, "-KHWGe-11kVt876Gnen4bb" : {"about" : "Mechanical Engineering, going to the gym, Moms Cooking", "email" : "", "firstname" : "Ruben", "lastname" : "Contreras", "phone" : "", "plans" : "Junior, Santa Clara University", "youtube" : "qVIvrRZGbPQ"},"-KHWGe-11kVt876Gnen4cc" : {"about" : "Badminton, American Football, Music, Travel, meeting new people", "email" : "", "firstname" : "Matthew", "lastname" : "Guttierez", "phone" : "", "plans" : "Freshman, UCLA", "youtube" : "uEvg6CVZARs"}, "-KHWGe-11kVt876Gnen4ee" : {"about" : "Education, Sociology, Community Service, Basketball", "email" : "", "firstname" : "Yadira", "lastname" : "Navarro", "phone" : "", "plans" : "Sophomore, UC Santa Cruz", "youtube" : "c1qYRczcoes"},"-KHWGe-11kVt876Gnen4gg" : {"about" : "Public Health Science, Adventure, Camping, Animals", "email" : "", "firstname" : "Dziemhong", "lastname" : "Navarro", "phone" : "", "plans" : "Freshman, UC Irvine", "youtube" : "7OnGLIPaMxA"}, "-KHWGe-11kVt876Gnen4" : {"about" : "-GSA, Interact, Polynesian, CSI Link Leader, Link Leader", "email" : "bamaganad@gmail.com", "firstname" : "Bridgette", "lastname" : "Magana-Davalos", "phone" : "(408)515-8407", "plans" : "UC Davis", "youtube" : "sLL5af5qunw"}, "-KHWGn1XtAnhDN-iIjCv" : {"about" : "Wrestling, Japanese Club, Polynesian Club, CSI Link Leader", "email" : "syl.spam123@gmail.com", "firstname" : "Sylvia", "lastname" : "Nguyen", "phone" : "4082060540", "plans" : "Studying at UC Davis", "youtube" : "XwUsC2TOUs0"}, "-KHWHCeqgZExmSedEFv6" : {"about" : "GSA Club, Avid Club, Soccer, CCPY, Bright Futures", "email" : "garciajazmine1581@gmail.com", "firstname" : "Jazmine", "lastname" : "Garcia-Ayala", "phone" : "408-826-5154", "plans" : "CSU East Bay", "youtube" : "Ilt8S3vehM4"}, "-KHWHsGHKid_GhLz__sR" : {"about" : "Soccer, Samoan Club ", "email" : "rubyclopezflores@gmail.com", "firstname" : "Ruby", "lastname" : "Lopez-Flores", "phone" : "(408)797-4720", "plans" : "Majoring in communications and minoring in sociology to become a social worker", "youtube" : "SVRl6DJR_9M"}, "-KHWHyyTIZYbIqRnn7yg" : {"about" : "I joined leadership my last year of HS and I was a ASBVP. ", "email" : "sakuratatsmeh@yahoo.com", "firstname" : "Judy", "lastname" : "Lam", "phone" : "+1 (408) 571-8938", "plans" : "at SFSU, enjoying my major. ", "youtube" : "Z6pX83ZZheU"}, "-KHWI6-iBzfJkwpRxR-k" : {"about" : "Ap classes, community service", "email" : "dayana.rivera61@gmail.com", "firstname" : "Dayana", "lastname" : "Rivera", "phone" : "4086136522", "plans" : "SJSU (4-year university)", "youtube" : "Whyy9RABRz4"}, "-KHWI7ldpSMbcE7tF3yO" : {"about" : "BSU, Avid", "email" : "diamondwashington1434@gmail.com", "firstname" : "Diamond", "lastname" : "Washington", "phone" : "(650)785-4180", "plans" : "Attend SF State ", "youtube" : "5vzC0p8sVt4"}, "-KHWIAec_b3HbszytzOw" : {"about" : "AVID Ambassador (freshman year), JV Football 13-14, Varsity Football 14-15 ", "email" : "osoriolopez98@gmail.com", "firstname" : "Joel", "lastname" : "Osorio", "phone" : "(408) 609-8385", "plans" : "go to a JC ", "youtube" : "ADuKjH0BnGY"}, "-KHWIE96lsEEeU9w01Ze" : {"about" : "Aztec Club", "email" : "davina.s.gil@gmal.com", "firstname" : "Davina", "lastname" : "Gil", "phone" : "(408)685-6150", "plans" : "Next year I hope to be attending De Anza", "youtube" : "Bs6ZeKZqOjA"}, "-KHWGe-11kVt876Gnen4aa" : {"about" : "Kinesiology, basketball, painting, education", "email" : "", "firstname" : "Makaela", "lastname" : "Gregorio", "phone" : "", "plans" : "Freshman, UNLV", "youtube" : "fbTxli2hryg"}, "-KHWINreh9t5j8bKg3CV" : {"about" : "Ping Pong Club, Yoga Club, Anime Club, Video Game Club.", "email" : "ant.leon15@gmail.com", "firstname" : "Rolando", "lastname" : "Leon", "phone" : "(650) 526 - 8973", "plans" : "I going to attend Evergreen Valley College.", "youtube" : "ROsfHKLJbNc"}, "-KHWP6pdo5MFb9Y7sxOa" : {"about" : "Soccer, Soñadores Club", "email" : "gnavaprado@gmail.com", "firstname" : "Guillermo", "lastname" : "Nava Prado", "phone" : "4084498601", "plans" : "working hard in CSU East Bay", "youtube" : "X24AcKJ4ppo"}, "-KHWPAkB8O7_sffVIcK5" : {"about" : "Art Club", "email" : "rmproject123@gmail.com", "firstname" : "Rubeno", "lastname" : "Martinez Aguilar", "phone" : "40862398961", "plans" : "San Jose State University", "youtube" : "e1vtPDocp8Y"}, "-KHWW1Zajg3Amiblh82Z" : {"about" : "overfelt soccer team", "email" : "brianchavez98@yahoo.com", "firstname" : "Brian", "lastname" : "chavez", "phone" : "brianchavez98@yahoo.com", "plans" : "evergreen community college", "youtube" : "xbSCPgKKTMg"}, "-KHWW35vMiR7wO5xzZ0L" : {"about" : "Curious Minds Club President, Aztec Club", "email" : "marilynlopez518@gmail.com", "firstname" : "Marilyn", "lastname" : "Lopez Mota", "phone" : "5623478688", "plans" : "San Francisco State University ", "youtube" : "Jna4eQIqYco"}, "-KHWW4nc-zjzJ7gDpkp0" : {"about" : "Overfelt Varsity Soccer ", "email" : "jdcv019@gmail.com", "firstname" : "Juan", "lastname" : "Cruz Vega", "phone" : "jdcv019@gmail.com", "plans" : "EVCC", "youtube" : "QV4VV9JOOBs"}, "-KHWW7EyGuFKo2LMRqXL" : {"about" : "Avid 4 ", "email" : "crystalislas777@gmail.com", "firstname" : "Crystal", "lastname" : "Islas", "phone" : "4083203907", "plans" : "In De Anza majoring in business administration ", "youtube" : "CN4TDFZoTDU"}, "-KHWW7qaLlJWWi3kTtFl" : {"about" : "Wrestling, ", "email" : "Joaquinmunoz45@yahoo.com", "firstname" : "Joaquin", "lastname" : "Munoz", "phone" : "4083931931", "plans" : "Pasadena city college ", "youtube" : "my1pBlxEBrI"}, "-KHWWBmgQjhqs7QxCHML" : {"about" : "Curious Minds Club, Aztec Club", "email" : "gvilma257@gmail.com", "firstname" : "Vilma", "lastname" : "Garcia Archundia", "phone" : "(408)836-2085", "plans" : "Chico State :)", "youtube" : "PaGMVfo6Dyk"}, "-KHWWFQwzT0yOsO8igSZ" : {"about" : "curious minds, california for justice, basketball, golf, volleyball , avid, sociology class, summer search", "email" : "emiliolicon98@gmail.com", "firstname" : "Emilio", "lastname" : "Licon Alvarado ", "phone" : "408-677-9780", "plans" : "Uc Berkeley studying sociology ", "youtube" : "0dU1lYtDxjY"}, "-KHWWFiKj16gVafq7vjP" : {"about" : "-Basketball, -Karate, -Badminton", "email" : "charliechap10@yahoo.com", "firstname" : "Charlie", "lastname" : "Chap", "phone" : "1 (408) 221-8522", "plans" : "I will be at Evergreen Valley College getting 4.0s", "youtube" : "mO-aqS1GDFU"}, "-KHWWGcWuTC5pp24BqnK" : {"about" : "Karate", "email" : "garciamiguel4905@students.esuhsd.org", "firstname" : "miguel", "lastname" : "Garcia", "phone" : "4085109619", "plans" : "evergreen valley college getting 4.0", "youtube" : "JSgfsoD7JXE"}, "-KHWWLzMRXt3TrBz-axk" : {"about" : "Polynesian,Aztec,Soccer,", "email" : "deltjessica2032@yahoo.com", "firstname" : "Jessica", "lastname" : "Deltoro", "phone" : "4086614361", "plans" : "De anza Community College", "youtube" : "vDhLSr2w2wU"}, "-KHWWPquKZRBqOYgVTAo" : {"about" : "BSU President ", "email" : "tyreek.washington@rocketmail.com", "firstname" : "Tyreek", "lastname" : "Washington", "phone" : "4085148861", "plans" : "Arizona State University", "youtube" : "K6f80XFg1PE"}, "-KHWWWEngdBJRNm0s0UZ" : {"about" : "Cross Country, Track and Field, Softball, Salsa Club, and AVID Club", "email" : "nathaliamayorga@yahoo.com", "firstname" : "Nathalia", "lastname" : "Mayorga", "phone" : "408-597-5619", "plans" : "I hope to be at a four year university! ", "youtube" : "rOiHg0tr72w"}, "-KHWWXMw9XQPFEqPWASw" : {"about" : "Football, Basketball, Samoan Club, Fellowship of Christian Athletes", "email" : "raymond.h9ro@gmail.com", "firstname" : "Raymond", "lastname" : "Haro", "phone" : "", "plans" : "Attending Humboldt State University", "youtube" : "C8B2Bl5T2m8"}, "-KHWWtsFR4rj5hqfXz4v" : {"about" : "avid, ", "email" : "mmurillo016@gmail.com", "firstname" : "maria", "lastname" : "murillo", "phone" : "(408)504-4946", "plans" : "de anza then tranfering to ucla", "youtube" : "NyjH396da1o"}, "-KHWX5J5oFlPE5oVFVKs" : {"about" : "Im not in any clubs or activities at school. ", "email" : "camilacastillo0511@gmail.com", "firstname" : "Camila", "lastname" : "Castillo", "phone" : "408-914-0284", "plans" : "community college", "youtube" : "_eLWIqycVx8"}, "-KHWGe-11kVt876Gnen4ff" : {"about" : "Education, Psychology, Creating AB540 Workshops", "email" : "", "firstname" : "Zayra", "lastname" : "Galindo", "phone" : "", "plans" : "Sophomore, UC Santa Cruz", "youtube" : "uDHEWcOQny8"}, "-KHWXFuM665eJ-_fwHU2" : {"about" : "Cross Country, Track and Field, Curious Minds club, Avid", "email" : "gonzalezmartin312@yahoo.com", "firstname" : "Martin", "lastname" : "Gonzalez", "phone" : "gonzalezmartin312@yahoo.com", "plans" : "Evergreen Valley College ", "youtube" : "1xcdgOzkYGw"}, "-KHWZxLpfhEE1tKCFX0p" : {"about" : "", "email" : "ochoa_darwin25@yahoo.com", "firstname" : "Darwin", "lastname" : "Ochoa", "phone" : "4086289775", "plans" : "Not having to worry about finding 38 dollars to pay for my gym yearly fee.", "youtube" : "643kCXs7hsA"} }'
var obj = JSON.parse(text);

   var seniors = function() {
      return obj;
   };


   var cs142models =  {
      obj: obj
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.cs142models = cs142models;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.cs142models = cs142models;
   }
})();