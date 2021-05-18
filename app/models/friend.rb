class Friend < ApplicationRecord
    validates_presence_of :user_id, :friend_id
    validates :friend_id, uniqueness: {scope: :user_id, message: "User is already your friend"}


    belongs_to :user,
    foreign_key: :user_id

    

end