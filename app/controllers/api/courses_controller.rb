class Api::CoursesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @courses = Course.where(creator_id: params)
        render :index
    end

    def show
        @course = Course.find_by(id: params[:id])
        if @course
            render :show
        else
            render json: ["Course does not exist!"], status: 404
        end
    end

    def create
        @course = Course.new(course_params)
        @course.creator_id = current_user.id
        if @course.save
            render :show
        else
            render json: @course.errors.full_messages, status: 401    
        end
    end

    def update 
        @course = Course.find_by(id: params[:id])
        if @course
            if @course.update(course_params)
                render :show
            else
                render json: @course.errors.full_messages, status: 422
            end
        else
            render json: ['Course does not exist'], status: 404
        end
    end

    def destroy
        @course = Course.find_by(id: params[:id])
        @user = current_user
        if @course
            if @user.id == @course.creator_id
                @course.destroy
                render "api/users/show"
            else
                render json: ["This isn't your course!"], status: 422
            end
        else
            render json: ["Course doesn't exist!"], status: 404
        end
    end

    private
    def course_params
        params.require(:course).permit(
            :name,
            :description,
            :distance,
            :creator_id,
            :waypoints)
    end



end
