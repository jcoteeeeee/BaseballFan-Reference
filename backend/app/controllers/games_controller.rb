class GamesController < ApplicationController 
    def index 
        games = Game.all 
        render json: games
    end

    def show 
        game = Game.find_by(id: params[:id])
        render json: game
    end 

    def create 
        game = Game.create(date: params[:date], result: params[:result], score: params[:score], opponent: params[:opponent], location: params[:location], st_pitcher: params[:st_pithcer], note: params[:note]) 
        render json: game 
    end 

    def update 
        game = Game.find_by(id: params[:id])
        game.update(date: params[:date], result: params[:result], score: params[:score], opponent: params[:opponent], location: params[:location], st_pitcher: params[:st_pithcer], note: params[:note])  
        render json: game 
    end 

    def destroy 
        game.find_by(id: params[:id])
        game.destroy 
    end 

end
