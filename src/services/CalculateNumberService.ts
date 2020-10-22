interface Request {
  num1: Array<number>;
  num2: Array<number>;
}

class CalculateNumberService {
  public async execute({ num1, num2 }: Request): Promise<Array<number>> {
    const firstNumbers = num1.join('');
    const secondNumberss = num2.join('');
    try {
      const total = Number(firstNumbers) + Number(secondNumberss);

      const result = Array<number>();
      for (var num = 0; num < total.toString().length; num++) {
        if(isNaN(Number(total.toString().charAt(num))))
        {
          throw new Error();
        }
        result.push(Number(total.toString().charAt(num)));
      }

      return result;
    } catch (error) {
      throw new error;
    }

  }
}

export default CalculateNumberService;