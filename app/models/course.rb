class Course < ApplicationRecord
    validates_presence_of :creator_id, :name, :description, :distance, :waypoints

    belongs_to :user,
    foreign_key: :creator_id
    
    has_many :comments,
    foreign_key: :course_id,
    class_name: :Comment

end
