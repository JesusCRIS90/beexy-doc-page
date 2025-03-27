# Pages to Implement

1. ~~CenterLayoutPage~~
   * fit2Content: boolean

2. ~~FixedWidthLayoutPage~~
   * width: NullableNumber                  --> NumericSlider

3. ~~FloatingLayoutPage~~
    * xpos: number,                         --> NumericSlider
    * ypos: number,                         --> NumericSlider
    * orientation: FLEX_ORIENTATION,        --> ComboBox
    * anchorPoint: AnchorPoint              --> ComboBox

4. GridLayout1DPage
    * orientation: ORIENTATION,             --> ComboBox
    * input: string,                        --> StringInput
    * groupPolicyPos: POL_POS,              --> ComboBox
    * gap: number                           --> NumericInput

1. GridLayout2DPage
    * input: iStringVec2D,                  --> StringInput
    * policyPos: POL_POS,                   --> ComboBox
    * gap: number                           --> NumericInput

2. ~~HorizontalLayoutPage~~
    * policyPos: POL_POS,                   --> ComboBox
    * gap: number                           --> NumericInput

3. ~~VerticalLayoutPage~~
    * policyPos: VPOS,                      --> ComboBox
    * gap: number                           --> NumericInput

1. ~~PairLayoutPage~~
    * spaceDistrobution: string             --> StringInput
    * pairDistribution: PAIR_DISTRIBUTION   --> ComboBox
    * gap: number                           --> NumericInput

2.  ResponsiveCardGridLayoutPage
    * MinMax: iMinMax                       --> ComboBox
    * gap: number                           --> NumericInput

3.  BackgroundLayoutPage
    * anchorPoint: ANCHOR_POINT             --> ComboBox
    * image: string                         --> LoaderImage


# Components to Build

    * ~~ComboBox~~
    * ~~NumericSlider~~
    * CategoricalSlider
    * ~~NumericInput~~
    * ~~StringInput~~
    * LoaderImage