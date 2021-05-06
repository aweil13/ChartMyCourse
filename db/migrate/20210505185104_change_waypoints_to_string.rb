class ChangeWaypointsToString < ActiveRecord::Migration[5.2]
  def change
    
    remove_column :courses, :waypoints
    add_column :courses, :waypoints, :string, null: false

  end
end
