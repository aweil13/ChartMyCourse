class Comment < ApplicationRecord

validates_presence_of :author_id, :body, :course_id, :username


belongs_to :user,
class_name: :User,
foreign_key: :author_id

belongs_to :course,
class_name: :Course,
foreign_key: :course_id

end