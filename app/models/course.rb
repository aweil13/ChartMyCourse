class Course < ApplicationRecord
    validates_presence_of :creator_id, :name, :description, :distance, :waypoints

    belongs_to :user
    

end
