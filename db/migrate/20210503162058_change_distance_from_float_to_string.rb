class ChangeDistanceFromFloatToString < ActiveRecord::Migration[5.2]
  def change
    change_column :courses, :distance, :string
  end
end
