class Api::CoursesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @courses = bounds ? Course.in_bounds(bounds) : Course.all
        render :index
    end

    def show
        @course = Course.find_by(params[:id])
    end

    def create
        @course = Course.new(course_params)
        if @course.save
            render :show
        else
            render json: @course.errors.full_messages, status: 401    
        end
    end

    private
    def course_params
        params.require(:course).permit(
            :start_lat,
            :start_long,
            :end_lat,
            :end_long,
            :name,
            :description,
            :length,
            :creator_id
        )
    end

    def bounds
        params[:bounds]
    end


end
