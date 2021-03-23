class RemoveColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :courses, :start_lat
    remove_column :courses, :end_lat
    remove_column :courses, :start_long
    remove_column :courses, :end_long
  end
end
