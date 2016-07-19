Rails.application.routes.draw do
  scope '/api' do
    resources :heros, except: [:new, :edit]
  end
end
