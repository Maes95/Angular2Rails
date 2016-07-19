class HerosController < ApplicationController
  before_action :set_hero, only: [:show, :update, :destroy]

  # GET /heros
  # GET /heros.json
  def index
    @heros = Hero.all

    render json: @heros
  end

  # GET /heros/1
  # GET /heros/1.json
  def show
    render json: @hero
  end

  # POST /heros
  # POST /heros.json
  def create
    @hero = Hero.new(hero_params)

    if @hero.save
      render json: @hero, status: :created, location: @hero
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /heros/1
  # PATCH/PUT /heros/1.json
  def update
    @hero = Hero.find(params[:id])

    if @hero.update(hero_params)
      head :no_content
    else
      render json: @hero.errors, status: :unprocessable_entity
    end
  end

  # DELETE /heros/1
  # DELETE /heros/1.json
  def destroy
    @hero.destroy

    head :no_content
  end

  private

    def set_hero
      @hero = Hero.find(params[:id])
    end

    def hero_params
      params.require(:hero).permit(:name, :power)
    end
end
