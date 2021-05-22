class AddUsernameComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :username, :string, null: false
  end
end
