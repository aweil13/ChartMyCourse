class FixColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :courses, :stat_long, :start_long
  end
end
