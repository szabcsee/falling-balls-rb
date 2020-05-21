class CalculateBallColourService

  def call(ball_count)

    return 'purple' if (ball_count % 15).zero?
    return 'green' if (ball_count % 3).zero?
    return 'blue' if (ball_count % 5).zero?

    'pink'
  end
end