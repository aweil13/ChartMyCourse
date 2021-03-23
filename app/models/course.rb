class Course < ApplicationRecord
    validates_presence_of :creator_id, :name, :description, :distance, :start_lat, :end_lat, :start_long, :end_long

    belongs_to :user
    
    

end
