class AddArrayRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :waypoints, :text, array: true, default: [];
  end
end
