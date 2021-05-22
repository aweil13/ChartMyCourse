class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy, :update]    

    def index
        @comments = Comment.where(route_id: params[:route_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @user = current_user
        if @comment
            if @user.id == comment.author_id
                comment.destroy
            else
                render json: ['Not your comment!'], status: 422
            end
        else
            render json: ['Comment does not exist!'], status: 404
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        
        if @comment
            if @comment.update(comment_params)
                render :show
            else
                render json: @comment.errors.full_messages, status: 422
            end
        else
            json: ['Comment could not be found'], status: 404
        end
    end


    private


    def comment_params
        params.require(:comment).permit(:route_id, :body, :author_id)
    end


end
