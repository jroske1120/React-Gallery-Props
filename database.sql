-- create table 
CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path varchar(300),
	description varchar(300),
	likes int not null default 0
);

-- query to get initial photo in to test
INSERT INTO galleryItems ( path, description) VALUES 
  ('images/Bungee.jpg', 'A 70-meter bungee jump over a river in San Gil, Colombia. This was one of the many incredible things I got to do in my two years in Colombia.'),
 ('images/IMG_0495.jpg', 'Photo of one of our dogs, Luna. She is a white pomeranian who will sometimes keep me company when I code. That is, unless her preferred parent is around.'),
 ('images/IMG_6751.JPG', 'Billy is our retired lead sled-dog that we got from Ely, Minnesota. Due to our small space, he lives with my in-laws in rural Minnesota.'),
 ('images/IMG_7527.JPG', 'Photo of my wife, Anais, and I while on a road trip up into Canada in the summer of 2018. This photo is on top of Sleeping Giant Mountain.'),
 ('images/IMG_3673.JPG', 'Anais and I visited Arizona in April of 2019. Here we are, almost falling in to the Grand Canyon.'),
 ('images/SHT.jpg', 'In the summer of 2018 my friend, Brian, and I hiked the entirety of the Superior Hiking Trail, from Duluth up to Canada.'),
 ('images/IMG_20181230_175548.jpg', 'Photo of my family and significant others in Cuenca, Ecuador. My sister lived in Ecuador for two years and we finally got to visit her for the holidays in 2018.'),
 ('images/Mawwage.jpg', 'Photo of my wife, Anais, and I on our wedding day. We were married in August, 2019.');

--after file images are in, the POST query is the following:
 INSERT INTO galleryItems ( path, description) 
 VALUES ($1, $2);

--used on the GET function, most recently added on top
SELECT * FROM galleryItems ORDER BY "id" DESC;;

-- used on PUT function that increments likes on a click
UPDATE galleryItems SET likes = likes+1 WHERE id = $1;

--DELETE request
DELETE FROM galleryItems WHERE id=$1;