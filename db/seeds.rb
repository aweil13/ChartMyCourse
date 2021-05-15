# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all


ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('courses')

User.create(username: "aweil13", password: "password", email: "ale13@gmail.com", birthdate: '1991/05/07', first_name: "Alejandro", last_name: "Weil", gender: "M", height: 180, weight: 85)
User.create(username: "eripley4", password: "password", email: "ripley@weyland-yutani.org", birthdate: '1980/03/17', first_name: "Ellen", last_name: "Ripley", gender: "F", height: 165, weight: 50)
User.create(username: "arake1000", password: "password", email: "a_rake@gmail.com", birthdate: '53/01/01', first_name: "Anomandaris", last_name: "Purake", gender: "M", height: 200, weight: 120)
User.create(username: "benji23", password: "password", email: "benjamin_bradley@gmail.com", birthdate: '1981/07/17', first_name: "Benjamin", last_name: "Bradley", gender: "M", height: 171, weight: 60)
User.create(username: "oceangirl89", password: "password", email: "adri_weil_89@gmail.com", birthdate: '1989/12/25', first_name: "Adriana", last_name: "Weil", gender: "F", height: 150, weight: 40)
User.create(username: "stonmey", password: "password", email: "tonnys@gmail.com", birthdate: '1970/06/30', first_name: "Stonny", last_name: "Menackis", gender: "F", height: 160, weight: 43)