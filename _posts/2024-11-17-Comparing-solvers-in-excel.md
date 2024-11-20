---
layout: post
title: Comparing Default Solvers in Excel
subtitle: Simplex is more likely to be the best option.
categories: operational-reasearch
excerpt_image: "assets/images/solver.png"

tags: [book, return, fixed-income]
---
![banner](/assets/images/solver.png)

## **Simplex Method**

- Used for linear optimization problems
- Fastest and most reliable for linear models
- Guaranteed to find the global optimum for linear problems
- Only works when the Assume Linear Model box is checked[1](https://www.solver.com/standard-excel-solver-limitations-nonlinear-optimization)

## **GRG (Generalized Reduced Gradient) Nonlinear Method**

- Used for nonlinear optimization problems
- Can handle smooth, continuous nonlinear functions
- May find local optima rather than global optima
- Slower than Simplex but faster than Evolutionary
- Default method when Assume Linear Model is unchecked[1](https://www.solver.com/standard-excel-solver-limitations-nonlinear-optimization)
- Works well for problems with continuous derivatives

## **Evolutionary Method**

- Used for non-smooth or discontinuous problems
- Can handle discrete variables and non-smooth functions
- Slowest of the three methods
- May not find the global optimum, but can often find good solutions for complex problems
- Useful when other methods fail due to discontinuities or discrete variables

## **Key Considerations**

- **Problem Type**: Linear problems should use Simplex. Nonlinear but smooth problems can use GRG Nonlinear. Complex or discontinuous problems may require Evolutionary.
- **Solution Quality**: Simplex guarantees global optima for linear problems. GRG may find local optima. Evolutionary is less precise but can handle more complex problems.
- **Computation Time**: Simplex is fastest, followed by GRG, with Evolutionary typically being the slowest.
- **Starting Points**: GRG and Evolutionary methods can benefit from multiple starting points to increase the chance of finding the global optimum[1](https://www.solver.com/standard-excel-solver-limitations-nonlinear-optimization).
- **Constraints**: All methods can handle constraints, but their effectiveness may vary depending on the problem structure.

To get the best results, it's often recommended to:

1. Use Simplex for linear problems
2. Try GRG Nonlinear first for smooth nonlinear problems
3. Use Evolutionary as a last resort for complex, discontinuous problems
4. Experiment with different starting points, especially for GRG Nonlinear[1](https://www.solver.com/standard-excel-solver-limitations-nonlinear-optimization)
5. Consider using the MultiStart option with GRG Nonlinear for global optimization[2](https://www.solver.com/excel-solver-change-options-grg-nonlinear-solving-method)

By understanding the strengths and limitations of each method, you can choose the most appropriate solver for your specific optimization problem in Excel.

### Additional Learning Resource to check out

Some Solver resources
[Frontier Solver](https://www.solver.com/solver-tutorial-using-solver) 
They have a lot of template files with case studies to help learning

[Microsoft Offical Documentation](https://support.microsoft.com/en-gb/office/load-the-solver-add-in-in-excel-612926fc-d53b-46b4-872c-e24772f078ca)

[Microsoft Offical Tutorial](https://support.microsoft.com/en-gb/office/define-and-solve-a-problem-by-using-solver-5d1a388f-079d-43ac-a7eb-f63e45925040)

[Open Solver](https://opensolver.org/)
Alternative solver solution with advanced models.


