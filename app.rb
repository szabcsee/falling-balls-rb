require 'sinatra'
require 'json'
require './src/domain/services/get-next-ball.rb'
require './src/domain/services/calculate-ball-score.rb'

class BallsApp < Sinatra::Application
  set :public_folder, Proc.new { File.join(root, "client") }

  get '/' do
    File.read(File.join('client', 'index.html'))
  end

  post '/next-ball' do
    content_type :json
    data = JSON.parse(request.body.read)

    next_ball = GetNextBallService.new.call(data['ballCount'])
    score = CalculateBallScoreService.new.call(next_ball.get_position)
    {colour: next_ball.get_colour, score: score, position: next_ball.get_position}.to_json
  end

end
