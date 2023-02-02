class UsersController < ApplicationController 
    def index 
        user = User.all 
        render json: user 
    end 

    def show 
        user = User.find_by(id: params[:id])
        render json: user
    end 

    def create 
        user = User.create(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], email: params[:email], password: params[:password], fav_team: params[:fav_team], photo: params[:photo])
        render json: user
    end 
    
end
