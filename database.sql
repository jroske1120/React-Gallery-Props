-- create table 
CREATE TABLE galleryItems (
	id SERIAL PRIMARY KEY,
	path varchar(300),
	description varchar(300),
	likes int not null default 0
);

-- query to get initial photo in to test
INSERT INTO galleryItems ( path, description) VALUES 
  ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');
  
--used on the GET function
SELECT * FROM galleryItems;

-- used on PUT function that increments likes on a click
UPDATE galleryItems SET likes = likes+1 WHERE id = $1;

--delete request
DELETE FROM galleryItems WHERE id=$1;