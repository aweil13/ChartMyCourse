class Course < ApplicationRecord
    validates_presence_of :creator_id, :name, :description, :distance, :start_lat, :end_lat, :start_long, :end_long

    belongs_to :user
    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
      end

end
