class CalculateBallScoreService

  def call(ball_count)

    divide_by_fifteen = ball_count/15.floor
    divide_by_five = ball_count/5.floor
    divide_by_three = ball_count/3.floor

    fifteen_points = divide_by_fifteen * 15
    five_points = (divide_by_five - divide_by_fifteen) * 5
    three_points = (divide_by_three - divide_by_fifteen) * 3
    one_points = ball_count - divide_by_fifteen - divide_by_five - divide_by_three

    fifteen_points + five_points + three_points + one_points
  end
end