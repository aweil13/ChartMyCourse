class Api::FriendsController < ApplicationController
    before_action :require_logged_in, only: [:create, :index, :destroy]


    def index
        @friendships = Friend.where(user_id: params[:user_id])
        render :index
    end

    def create
        @friend = Friend.new(friend_params)
        @friend.user_id = current_user.id
        
        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(id: params[:id])
        @user = current_user

        if @user.id == @friend.user_id
            @friend.destroy
            render "api/users/show"    
        else
            render json: ["This person isn't on your friends list!"]
        end
    end


    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id)
    end
end
