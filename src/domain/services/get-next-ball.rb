require './src/domain/services/calculate-ball-colour.rb'
require './src/domain/entities/ball.rb'

class GetNextBallService

  def call(ball_count)
    ball_count += 1 # Next Ball's count

    colour = CalculateBallColourService.new.call ball_count
    ball = Ball.new(ball_count, colour)

  end
end