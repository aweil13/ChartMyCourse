# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')

User.create(username: "aweil13", password: "password", email: "ale13@gmail.com", birthdate: '1991/05/07', first_name: "Alejandro", last_name: "Weil", gender: "M", height: 180, weight: 85)