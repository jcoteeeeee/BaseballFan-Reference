class SessionsController < ApplicationController  
    def create 
        user = user.find_by(username: params[:username])
        session[:user_id] = user.id 
        render json: user 
    end 
end
