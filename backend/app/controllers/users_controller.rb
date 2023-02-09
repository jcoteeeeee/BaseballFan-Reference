class UsersController < ApplicationController 
    def index 
        user = User.all 
        render json: user 
    end 

    def show 
        user = User.find_by(id: params[:id]) 
        if user 
            render json: user, status: :ok 
        else 
            render json: {error: 'Not authenticated'}, status: :unauthorized 
    end 

    def create 
        user = User.create(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], email: params[:email], password: params[:password], fav_team: params[:fav_team], photo: params[:photo])
        if user.valid? 
            session[:user_id] = user.id
            render json: user, status: created
        else 
            render json: {error: 'Could not create account'}, status: :unprocessable_entity
    end 

    def update 
        user = User.find_by(id: params[:id])
        user.update(first_name: params[:first_name], last_name: params[:last_name], username: params[:username], email: params[:email], password: params[:password], fav_team: params[:fav_team], photo: params[:photo])  
        render json: user 
    end 

    def destroy 
        user = User.find_by(id: params[:id])
        user.destroy  
    end 

    def user_params
        params.premit(:usrname, :email, :password)
    end
    
end
