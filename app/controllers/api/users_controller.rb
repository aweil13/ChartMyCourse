class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:index, :user_friends]


    def index
      @users = User.all
      render :index
    end

    def user_friends
      user_id = current_user.id
      friendships = Friend.where("user_id = ?", user_id)
      friend_ids = friendships.map {|friendship| friendship.friend_id}
      @friends = User.find(friend_ids)
      render :user_friends
    end


    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
          render :show
        else
          render json: ['User could not be found'], status: 404
        end
      end

    def user_params
        params.require(:user).permit(:username, :email, :password, :birthdate, :gender, :first_name, :last_name, :height, :weight)
    end
end
