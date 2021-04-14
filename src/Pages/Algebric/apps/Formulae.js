import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography, Grid, Card, IconButton } from '@material-ui/core';
import Forward from '../../../Assets/icons/Forward';
import Compress from '../../../Assets/icons/Compress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    }
}));

export default function Formulae() {
    const classes = useStyles();
    let dicFormulas = [
        'age calculator', 'Compound Interest Formula', 'Trigonometry Formula', 'Integration Formula', 'Algebra Formula', 'Percentage Formula',
        'differentiation Formula', 'Standard Deviation Formula', 'Simple Interest Formula', 'Mensuration Formula',
        'Symmetry Formula', 'Cube Formula', 'Area Of Triangle Formula', 'Area Of Circle Formula', 'Area Of Rectangle Formula', 'Triangle Formula',
        'Combination Formula', 'Derivative Formula', 'Cylinder Volume Formula', 'Area Of Square Formula', 'Probability Formula', 'Variance Formula',
        'Circle Formula', 'Area Formula', 'Euler’S Formula', 'Perimeter Of Triangle Formula', 'Cos2X Formula', 'Fahrenheit To Celsius Formula',
        'Perimeter Of Rectangle Formula', 'Geometry Formula', 'Integration By Parts Formula', 'Mean Median Mode Formula',
        'Volume Formula', 'Quadratic Equation Formula', 'Rectangle Formula', 'Volume Of Sphere Formula', 'Permutation Formula', 'Logarithm Formula',
        'Permutation And Combination Formula', 'Basic Math Formulas', 'Limits Formula', 'Pde', 'Profit Formula', 'Sin2X Formula', 'Square Formula',
        'Area Of Quadrilateral Formula', 'Associative Property', 'Discount Formula', 'Inverse Trigonometry Formula', 'Percentile Formula',
        'Pythagorean Theorem Formula', 'Statistics Formulas', 'Volume Of Cube Formula', 'Area Of Isosceles Triangle Formula', 'Arc Length Form', 'Commutative Property',
        'Circumference Formula', 'Area Of Equilateral Triangle Formula', 'Distributive Property', 'Geometric Mean Formula', 'Correlation Coefficient Formula', 'Gross Profit Formula',
        'Interpolation Formula', 'Perimeter Formula', 'Slope Formula', 'Selling Price Formula', 'Arithmetic Mean Formula', 'Covariance Formula',
        'Coordinate Geometry Formulas', 'Percentage Increase Formula', 'Exponential Formula', 'Cosine Formula', 'Equilateral Triangle Formula',
        'Mean Deviation Formula', 'Midpoint Formula', 'Ratio Analysis Formulas', 'Sphere Formula', 'Square Root Formula', 'Trapezoid Formula',
        'Polynomial Formula', 'Binomial Theorem Formula', 'Differential Equations Formulas', 'Fourier Series Formula', 'Sin Cos Formula', 'Surface Area Of Cylinder Formula',
        'Weighted Average Formula', 'Binomial Expansion Formula', 'Calculus Formulas', 'Parallelogram Formula', 'Rhombus Formula', 'T-Test Formula',
        'Temperature Conversion Formula', 'Matrix Formula', 'Diagonal Formula', 'Binomial Distribution Formula', 'Formula For Angles', 'Linear Regression Formula',
        'Radius Formula', 'Trapezoid Area Formula', 'Factorization Formula', 'Poisson Distribution Formula', 'Polygon Formula', 'Standard Error Formula',
        'Sum Of Squares Formula', 'Surface Area Formula', 'Differentiation And Integration Formulas', 'Isosceles Triangle Formula', 'Percent Error Formula',
        'Prism Formula', 'Quadrilateral Formula', 'Reduction Formula', 'Sets Formula', 'Inverse Trigonometric Functions Formulas', 'Linear Equation Formula',
        'Half Angle Formula', 'Diameter Formula', 'Division Formula', 'Normal Distribution Formula', 'Vector Formula', 'Ellipse Formula', 'Ratio And Proportion Formula',
        'Definite Integral Formula', 'Chi-Square Formula', 'Conditional Probability Formula', 'Factorial Formula', 'Half-Life Formula', 'Surface Area Of A Cone Formula',
        'Percent Change Formula', 'Taylor Series Formula', 'Algebraic Expression Formula', 'Bayes Theorem Formula', 'Lcm Formula', 'Sine Formula',
        'Z Score Formula', 'Hyperbolic Functions Formulas', 'Parabola Formula', 'Sequence And Series Formulas', 'Complex Number Formula', 'Profit Margin Formula', 'Pythagorean Triples Formula',
        'Quartile Formula', 'Cube Root Formula', 'Revenue Formula', 'Sample Size Formula', 'Summation Formulas', 'Trigonometric Functions Formula', 'Chain Rule Formula', 'R Squared Formula', 'Series Formula', 'Exponents And Powers Formulas',
        'Hyperbola Formula', 'Determinant Formula', 'Indefinite Integral Formulas', 'Chord Length Formula', 'Geometric Series Formula', 'Right Triangle Formula', 'Confidence Interval Formula',
        'Determinant Formula', 'Hyperbola Formula', 'Pyramid Formula', 'Pi Formula', 'Cpk Formula', 'Arithmetic Sequence Formula', 'Dot Product Formula', 'F Test Formula', 'Tangent Formula', 'Cross Product Formula', 'Double Angle Formula', 'Interquartile Range Formula', 'Hexagon Formula',
        'Integral Calculus Formulas', 'Prime Number Formula', 'Scalene Triangle Formula', 'Geometric Sequence Formula', 'Linear Interpolation Formula',
        'Secant Formula', 'Equation Formula'];



    return (
        <div className={classes.root}>
            <CssBaseline />
            <section style={{
                width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.5rem',
                margin: 'auto',
            }}>
                <h1 style={{
                    display: 'block', fontSize: '26px', lineHeight: '1.2', fontWeight: '800', marginTop: '0px', textTransform: 'capitalize', textAlign: 'center', marginBottom: '1rem',
                }}>List of Maths Formulas</h1>
            </section>
            <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', }}>
                    {
                        dicFormulas.map(value => {
                            return (<li class="ak39fa-0 bhAFtM">
                                <div class="ojwc4z-0 jkSeLq">
                                    <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href={"/mathcalc/algebric/formulae/" + value.replace(' ', '-').replace(' s', '')}>
                                        {value.replace('Formula', '')}</a>
                                    <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                        <Compress />
                                    </div>
                                    <div class="ojwc4z-1 jgylRt">
                                        <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                            <Forward />
                                        </div></div><p class="ojwc4z-5 jZEeUz">
                                        {value}
                                    </p>
                                </div>
                            </li>)
                        })
                    }
                </div>
            </Container>
        </div >
    );
}
