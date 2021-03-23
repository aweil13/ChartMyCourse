class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.float :distance, null: false
      t.float :start_lat, null: false
      t.float :stat_long, null: false
      t.float :end_lat, null: false
      t.float :end_long, null: false
      t.timestamps
    end
    add_index :courses, :creator_id
    add_index :courses, :name
  end
end
