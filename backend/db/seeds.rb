# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# puts "seeding user"
# # User.create(first_name: 'NameOne', last_name: 'LastNameOne', username: 'userOne', email: 'example@gmail.com', password: '12345', fav_team: 'Mets', photo: './nothing')    
# # User.create(first_name: 'NamtTwo', last_name: 'LastNameTwo', username: 'userTwo', email: 'fakeemail@gmail.com', password: 'abcde', fav_team: 'Phillies', photo: './nothing')     
# # User.create(first_name: 'NameThree', last_name: 'LastNameThree', username: 'userThree', email: 'nothing@gmail.com', password: '11111', fav_team: 'Red Sox', photo: './nothing')     
# # User.create(first_name: 'NameFour', last_name: 'LastNameFour', username: 'userFour', email: 'noemail@gmail.com', password: '12121', fav_team: 'Twins', photo: './nothing')     
# # User.create(first_name: 'NameFive', last_name: 'LastNameFive', username: 'userFive', email: 'gmail@gmail.com', password: '00000', fav_team: 'Blue Jays', photo:'./nothing')

# Game.create(user_id: User.first.id, date: '2022-04-10', result: 'Win', score: '5-1', opponent: 'Phillies', location: 'Citi Field', st_pitcher: 'Max Scherzer', note: 'Great game.') 
# Game.create(user_id: User.first.id, date: '2022-08-18', result: 'Loss', score: '2-5', opponent: 'Angels', location: 'Citi Field', st_pitcher: 'Jacob deGrom', note: 'Cool game.') 
# Game.create(user_id: User.second.id, date: '2022-05-10', result: 'Win', score: '10-5', opponent: 'Yankees', location: 'Citizens Bank Park', st_pitcher: 'Aaron Nola', note: 'Crazy home run.') 
# Game.create(user_id: User.second.id, date: '2022-06-02', result: 'Loss', score: '0-2', opponent: 'Marlins', location: 'Citizens Bank Park', st_pitcher: 'Zack Wheeler', note: 'I thought the stadium would be better.') 
# Game.create(user_id: User.third.id, date: '2022-09-20', result: 'Win', score: '4-3', opponent: 'Dodgers', location: 'Fenway Park', st_pitcher: 'Chris Sale', note: 'Took a long time.') 
# Game.create(user_id: User.third.id, date: '2022-09-25', result: 'Loss', score: '2-3', opponent: 'Reds', location: 'Fenway Park', st_pitcher: 'Nick Pivetta', note: 'Trash team.') 
# Game.create(user_id: User.fourth.id, date: '2022-04-25', result: 'Win', score: '2-1', opponent: 'Tigers', location: 'Target Field', st_pitcher: 'Joe Ryan', note: 'Waste of time') 
# Game.create(user_id: User.fourth.id, date: '2022-09-05', result: 'Loss', score: '1-3', opponent: 'Mariners', location: 'Target Field', st_pitcher: 'Tyler Mahle', note: 'Amazing game') 
# Game.create(user_id: User.fifth.id, date: '2022-08-10', result: 'Win', score: '4-0', opponent: 'Nationals', location: 'Rogers Centre', st_pitcher: 'Alek Manoah', note: 'Can not wait to go to another game.') 
# Game.create(user_id: User.fifth.id, date: '2022-08-26', result: 'Loss', score: '2-3', opponent: 'Brewers', location: 'Rogers Centre', st_pitcher: 'Kevin Gausman', note: 'Boring.') 