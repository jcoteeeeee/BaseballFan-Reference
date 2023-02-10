class TodosController < ApplicationController
    before_action :authentication

  # GET /todos
  def index
    @todos = Todo.all

    render json: @todos
  end
end
