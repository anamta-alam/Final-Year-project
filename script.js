const SVG_NS = "http://www.w3.org/2000/svg";

const theoremData = [
  {
    id: "t1211",
    number: "Theorem 12.1.1",
    chapter: "Chapter 12 - Line Bisectors",
    tag: "Geometry",
    title: "A point on the right bisector of a line segment is equidistant from its end points.",
    statement: "If point P lies on the perpendicular bisector of AB, then PA = PB.",
    intro: "Given line segment AB and a point P on its right bisector. Join P with A and B.",
    proofHint: "Triangles PAC and PBC are congruent because AC = CB, PC is common, and both angles at C are 90 degrees.",
    studentTip: "This theorem helps us prove equal distances from one point to two end points.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        A: [140, 220], C: [300, 220], B: [460, 220], P: [300, 90], M: [300, 310]
      },
      shapes: [
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "pm", type: "line", points: ["P", "M"] },
        { id: "pa", type: "line", points: ["P", "A"] },
        { id: "pb", type: "line", points: ["P", "B"] },
        { id: "pc", type: "line", points: ["P", "C"] },
        { id: "rightMark", type: "polyline", coords: [[300, 220], [300, 202], [318, 202], [318, 220]] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [126, 238] },
        { id: "labelB", text: "B", at: [468, 238] },
        { id: "labelC", text: "C", at: [286, 238] },
        { id: "labelP", text: "P", at: [308, 82] },
        { id: "labelM", text: "M", at: [308, 326] }
      ]
    },
    steps: [
      {
        title: "Draw line segment AB",
        text: "Start from the segment AB. Point C is the midpoint of AB.",
        highlight: ["ab", "labelA", "labelB", "labelC"]
      },
      {
        title: "Draw the right bisector",
        text: "Draw PM so it cuts AB at C and makes a right angle there.",
        highlight: ["ab", "pm", "rightMark", "labelP", "labelM", "labelC"]
      },
      {
        title: "Place P on the bisector",
        text: "Since P is on the right bisector, AC = CB and both angles at C are 90 degrees.",
        highlight: ["P", "pm", "ab", "rightMark", "labelP", "labelC"]
      },
      {
        title: "Join the end points",
        text: "Join P to A and P to B to form triangles PAC and PBC.",
        highlight: ["pa", "pb", "pc", "ab", "labelA", "labelB", "labelP"]
      },
      {
        title: "Conclude the proof",
        text: "The triangles are congruent, so the corresponding sides are equal. Therefore PA = PB.",
        highlight: ["pa", "pb", "pc", "labelA", "labelB", "labelP"]
      }
    ]
  },
  {
    id: "t1212",
    number: "Theorem 12.1.2",
    chapter: "Chapter 12 - Line Bisectors",
    tag: "Geometry",
    title: "Any point equidistant from the end points of a line segment is on the right bisector of it.",
    statement: "If PA = PB, then point P lies on the perpendicular bisector of AB.",
    intro: "Take line segment AB. Point P is such that PA and PB are equal. Join P to the midpoint C of AB.",
    proofHint: "In triangles ACP and BCP, PA = PB, PC is common and AC = BC. So the triangles are congruent, giving equal angles at C. These equal angles form a straight line, so each becomes 90 degrees.",
    studentTip: "This is the converse theorem. Here we start from equal distances and prove the point lies on the perpendicular bisector.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        A: [150, 265], C: [300, 265], B: [450, 265], P: [300, 90]
      },
      shapes: [
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "pa", type: "line", points: ["P", "A"] },
        { id: "pb", type: "line", points: ["P", "B"] },
        { id: "pc", type: "line", points: ["P", "C"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [137, 284] },
        { id: "labelB", text: "B", at: [456, 284] },
        { id: "labelC", text: "C", at: [286, 284] },
        { id: "labelP", text: "P", at: [308, 82] }
      ]
    },
    steps: [
      {
        title: "Start with equal slant sides",
        text: "Draw AB and choose point P so that PA is equal to PB.",
        highlight: ["ab", "pa", "pb", "labelA", "labelB", "labelP"]
      },
      {
        title: "Mark the midpoint C",
        text: "Take point C as the midpoint of AB, so AC = CB.",
        highlight: ["ab", "labelC", "labelA", "labelB"]
      },
      {
        title: "Join P to C",
        text: "Now join point P to the midpoint C to form triangles ACP and BCP.",
        highlight: ["pa", "pb", "pc", "labelP", "labelC"]
      },
      {
        title: "Use triangle congruence",
        text: "Since PA = PB, AC = CB and PC is common, the two triangles are congruent.",
        highlight: ["pa", "pb", "pc", "ab", "labelA", "labelB", "labelC"]
      },
      {
        title: "Reach the perpendicular bisector",
        text: "The equal angles at C lie on a straight line, so each angle is 90 degrees. Therefore PC is perpendicular to AB and also passes through its midpoint C.",
        highlight: ["pc", "ab", "labelC", "labelP"]
      }
    ]
  },
  {
    id: "t1213",
    number: "Theorem 12.1.3",
    chapter: "Chapter 12 - Line Bisectors",
    tag: "Geometry",
    title: "The right bisectors of the sides of a triangle are concurrent.",
    statement: "The perpendicular bisectors of AB, BC and AC meet at one common point.",
    intro: "Construct triangle ABC. Draw the right bisectors of AB and BC. They intersect at O.",
    proofHint: "From the first bisector OA = OB, and from the second OB = OC. Therefore OA = OC, so O also lies on the bisector of AC.",
    studentTip: "The common meeting point of all three perpendicular bisectors is called the circumcenter.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        A: [310, 55], B: [150, 290], C: [470, 290], O: [300, 190]
      },
      shapes: [
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "ca", type: "line", points: ["C", "A"] },
        { id: "bisAB", type: "line", coords: [[120, 135], [420, 230]] },
        { id: "bisBC", type: "line", coords: [[300, 70], [300, 330]] },
        { id: "bisCA", type: "line", coords: [[180, 220], [420, 110]] },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "oc", type: "line", points: ["O", "C"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [318, 47] },
        { id: "labelB", text: "B", at: [136, 304] },
        { id: "labelC", text: "C", at: [476, 304] },
        { id: "labelO", text: "O", at: [309, 184] }
      ]
    },
    steps: [
      {
        title: "Draw triangle ABC",
        text: "Begin with the triangle and identify its three sides.",
        highlight: ["ab", "bc", "ca", "labelA", "labelB", "labelC"]
      },
      {
        title: "Draw two right bisectors",
        text: "Construct the right bisectors of AB and BC. They cross at point O.",
        highlight: ["bisAB", "bisBC", "ab", "bc", "labelO"]
      },
      {
        title: "Use equal-distance property",
        text: "Because O is on the bisector of AB, OA = OB. Because O is on the bisector of BC, OB = OC.",
        highlight: ["oa", "ob", "oc", "bisAB", "bisBC", "labelO"]
      },
      {
        title: "Connect the equal lengths",
        text: "From OA = OB and OB = OC, we get OA = OC.",
        highlight: ["oa", "ob", "oc", "labelA", "labelB", "labelC", "labelO"]
      },
      {
        title: "Show concurrency",
        text: "Since O is equally distant from A and C, it lies on the bisector of AC too. So all three bisectors are concurrent.",
        highlight: ["bisAB", "bisBC", "bisCA", "oa", "oc", "labelO"]
      }
    ]
  },
  {
    id: "t1214",
    number: "Theorem 12.1.4",
    chapter: "Chapter 12 - Angle Bisectors",
    tag: "Geometry",
    title: "Any point on the bisector of an angle is equidistant from its arms.",
    statement: "If point P lies on the bisector of angle AOB, then PQ = PR.",
    intro: "Take angle AOB. Point P lies on angle bisector OM. Draw PR perpendicular to OA and PQ perpendicular to OB.",
    proofHint: "Triangles OPQ and OPR are congruent using equal angles and the common side OP. So PQ = PR.",
    studentTip: "Distance from a point to a line is measured by a perpendicular line segment.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        O: [120, 285], A: [265, 65], B: [500, 285], M: [430, 170], P: [335, 190], Q: [335, 285], R: [286, 143]
      },
      shapes: [
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "om", type: "line", points: ["O", "M"] },
        { id: "op", type: "line", points: ["O", "P"] },
        { id: "pq", type: "line", points: ["P", "Q"] },
        { id: "pr", type: "line", points: ["P", "R"] },
        { id: "rightQ", type: "polyline", coords: [[335, 285], [335, 267], [353, 267], [353, 285]] },
        { id: "rightR", type: "polyline", coords: [[286, 143], [297, 154], [308, 143], [297, 132]] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [104, 302] },
        { id: "labelA", text: "A", at: [271, 57] },
        { id: "labelB", text: "B", at: [506, 302] },
        { id: "labelM", text: "M", at: [438, 169] },
        { id: "labelP", text: "P", at: [343, 188] },
        { id: "labelQ", text: "Q", at: [341, 304] },
        { id: "labelR", text: "R", at: [270, 138] }
      ]
    },
    steps: [
      {
        title: "Draw angle AOB",
        text: "Begin with the two arms OA and OB meeting at O.",
        highlight: ["oa", "ob", "labelO", "labelA", "labelB"]
      },
      {
        title: "Draw the angle bisector",
        text: "Now draw OM inside the angle. Point P lies on this bisector.",
        highlight: ["oa", "ob", "om", "op", "labelM", "labelP"]
      },
      {
        title: "Drop perpendiculars from P",
        text: "Draw PR perpendicular to OA and PQ perpendicular to OB.",
        highlight: ["pr", "pq", "rightQ", "rightR", "labelR", "labelQ", "labelP"]
      },
      {
        title: "Compare the triangles",
        text: "Triangles OPQ and OPR share OP and have equal angles because OP is the angle bisector.",
        highlight: ["op", "pr", "pq", "oa", "ob", "om", "labelO", "labelP"]
      },
      {
        title: "State the result",
        text: "The triangles are congruent, so the matching perpendiculars are equal. Therefore PQ = PR.",
        highlight: ["pq", "pr", "labelQ", "labelR", "labelP"]
      }
    ]
  },
  {
    id: "t1215",
    number: "Theorem 12.1.5",
    chapter: "Chapter 12 - Angle Bisectors",
    tag: "Geometry",
    title: "Any point inside an angle, equidistant from its arms, is on the bisector of it.",
    statement: "If a point inside angle AOB has equal perpendicular distances from OA and OB, then that point lies on the angle bisector.",
    intro: "Take a point P inside angle AOB. Draw PQ perpendicular to OB and PR perpendicular to OA, with PQ = PR. Join P to O.",
    proofHint: "Triangles OPQ and OPR are right triangles. They have equal hypotenuse OP, one equal side PQ = PR, so the triangles are congruent. Therefore the angle at O is equal on both sides.",
    studentTip: "This is the converse of the angle-bisector distance theorem.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        O: [120, 285], A: [260, 65], B: [500, 285], P: [350, 185], Q: [350, 285], R: [287, 144]
      },
      shapes: [
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "op", type: "line", points: ["O", "P"] },
        { id: "pq", type: "line", points: ["P", "Q"] },
        { id: "pr", type: "line", points: ["P", "R"] },
        { id: "rightQ", type: "polyline", coords: [[350, 285], [350, 267], [368, 267], [368, 285]] },
        { id: "rightR", type: "polyline", coords: [[287, 144], [298, 155], [309, 144], [298, 133]] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [104, 302] },
        { id: "labelA", text: "A", at: [267, 58] },
        { id: "labelB", text: "B", at: [506, 302] },
        { id: "labelP", text: "P", at: [358, 182] },
        { id: "labelQ", text: "Q", at: [356, 304] },
        { id: "labelR", text: "R", at: [271, 140] }
      ]
    },
    steps: [
      {
        title: "Draw angle AOB and point P",
        text: "Begin with angle AOB and choose point P inside the angle.",
        highlight: ["oa", "ob", "labelO", "labelA", "labelB", "labelP"]
      },
      {
        title: "Draw equal perpendiculars",
        text: "From P, draw PQ perpendicular to OB and PR perpendicular to OA, and these two distances are equal.",
        highlight: ["pq", "pr", "rightQ", "rightR", "labelQ", "labelR", "labelP"]
      },
      {
        title: "Join P to O",
        text: "Join O to P so that two right triangles OPQ and OPR are formed.",
        highlight: ["op", "pq", "pr", "labelO", "labelP"]
      },
      {
        title: "Compare the right triangles",
        text: "The two triangles have equal hypotenuse OP, equal sides PQ and PR, and each contains a right angle.",
        highlight: ["op", "pq", "pr", "rightQ", "rightR"]
      },
      {
        title: "Conclude the point is on the bisector",
        text: "Since the triangles are congruent, angle POQ equals angle POR. Therefore OP bisects angle AOB, so P lies on the angle bisector.",
        highlight: ["op", "oa", "ob", "labelO", "labelP"]
      }
    ]
  },
  {
    id: "t1216",
    number: "Theorem 12.1.6",
    chapter: "Chapter 12 - Angle Bisectors",
    tag: "Geometry",
    title: "The bisectors of the angles of a triangle are concurrent.",
    statement: "The angle bisectors of A, B and C meet at one common point.",
    intro: "Draw triangle ABC. Draw the bisectors of angles B and C. They meet at I. Then draw distances from I to the sides.",
    proofHint: "A point on an angle bisector is equidistant from both arms. So I is equally distant from AB and BC, and also from BC and CA. Hence it is equally distant from AB and AC too.",
    studentTip: "This common meeting point is called the incenter of the triangle.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        A: [310, 65], B: [135, 285], C: [480, 285], I: [300, 205], D: [300, 285], E: [357, 147], F: [247, 148]
      },
      shapes: [
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "ca", type: "line", points: ["C", "A"] },
        { id: "bi", type: "line", points: ["B", "I"] },
        { id: "ci", type: "line", points: ["C", "I"] },
        { id: "ai", type: "line", points: ["A", "I"] },
        { id: "id", type: "line", points: ["I", "D"] },
        { id: "ie", type: "line", points: ["I", "E"] },
        { id: "if", type: "line", points: ["I", "F"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [317, 56] },
        { id: "labelB", text: "B", at: [122, 300] },
        { id: "labelC", text: "C", at: [487, 300] },
        { id: "labelI", text: "I", at: [309, 205] },
        { id: "labelD", text: "D", at: [308, 304] },
        { id: "labelE", text: "E", at: [364, 145] },
        { id: "labelF", text: "F", at: [233, 146] }
      ]
    },
    steps: [
      {
        title: "Draw triangle ABC",
        text: "First draw the triangle and mark its three angles.",
        highlight: ["ab", "bc", "ca", "labelA", "labelB", "labelC"]
      },
      {
        title: "Draw two angle bisectors",
        text: "Construct the bisectors from B and C. They intersect at I.",
        highlight: ["bi", "ci", "labelI", "labelB", "labelC"]
      },
      {
        title: "Draw the distances from I",
        text: "From I, draw the perpendicular distances to the three sides. These are IF, ID and IE.",
        highlight: ["id", "ie", "if", "labelD", "labelE", "labelF", "labelI"]
      },
      {
        title: "Use equal distances",
        text: "Since I lies on the bisector of angle B, it is equally distant from BA and BC. Since it lies on the bisector of angle C, it is equally distant from BC and CA.",
        highlight: ["if", "id", "ie", "bi", "ci", "labelI"]
      },
      {
        title: "Complete the argument",
        text: "So I is equally distant from BA and AC too. Therefore I also lies on the bisector of angle A, and all three angle bisectors are concurrent.",
        highlight: ["ai", "bi", "ci", "id", "ie", "if", "labelI"]
      }
    ]
  },
  {
    id: "t1611",
    number: "Theorem 16.1.1",
    chapter: "Chapter 16 - Area",
    tag: "Area",
    title: "Parallelograms on the same base and between the same parallels are equal in area.",
    statement: "If two parallelograms stand on the same base AB and between the same parallels, their areas are equal.",
    intro: "Take parallelograms ABCD and ABEF on the same base AB and between one pair of parallel lines.",
    proofHint: "Both parallelograms have the same base and the same altitude, so their areas are equal.",
    studentTip: "In area theorems, same base and same height are the key ideas.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        A: [140, 265], B: [330, 265], D: [210, 120], C: [400, 120], F: [70, 120], E: [260, 120]
      },
      shapes: [
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "dc", type: "line", points: ["D", "C"] },
        { id: "fe", type: "line", points: ["F", "E"] },
        { id: "abcd", type: "polygon", points: ["A", "B", "C", "D"] },
        { id: "abef", type: "polygon", points: ["A", "B", "E", "F"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [130, 286] },
        { id: "labelB", text: "B", at: [336, 286] },
        { id: "labelC", text: "C", at: [406, 116] },
        { id: "labelD", text: "D", at: [213, 114] },
        { id: "labelE", text: "E", at: [262, 114] },
        { id: "labelF", text: "F", at: [58, 114] }
      ]
    },
    steps: [
      {
        title: "Show the common base",
        text: "Both parallelograms stand on the same base AB.",
        highlight: ["ab", "labelA", "labelB"]
      },
      {
        title: "Draw parallelogram ABCD",
        text: "ABCD is the first parallelogram between the two parallel lines.",
        highlight: ["abcd", "dc", "labelC", "labelD"]
      },
      {
        title: "Draw parallelogram ABEF",
        text: "ABEF is the second parallelogram on the same base and between the same parallels.",
        highlight: ["abef", "fe", "labelE", "labelF"]
      },
      {
        title: "Compare the altitudes",
        text: "Because both shapes are between the same parallels, their heights on base AB are equal.",
        highlight: ["ab", "dc", "fe", "abcd", "abef"]
      },
      {
        title: "Conclude equal area",
        text: "Same base and same altitude give equal area. Therefore area of ABCD = area of ABEF.",
        highlight: ["abcd", "abef", "ab"]
      }
    ]
  },
  {
    id: "t1612",
    number: "Theorem 16.1.2",
    chapter: "Chapter 16 - Area",
    tag: "Area",
    title: "Parallelograms on equal bases and having the same altitude are equal in area.",
    statement: "If parallelograms are on equal bases and have equal height, then their areas are equal.",
    intro: "Place two parallelograms on equal bases BC and FG with equal altitudes between parallel lines.",
    proofHint: "Equal base and equal altitude imply equal area, even when the figures are in different positions.",
    studentTip: "This theorem extends the same-base idea to equal bases.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        B: [130, 280], C: [230, 280], F: [330, 280], G: [430, 280], A: [90, 120], D: [190, 120], E: [290, 120], H: [390, 120]
      },
      shapes: [
        { id: "abcd", type: "polygon", points: ["A", "B", "C", "D"] },
        { id: "efgh", type: "polygon", points: ["E", "F", "G", "H"] },
        { id: "base1", type: "line", points: ["B", "C"] },
        { id: "base2", type: "line", points: ["F", "G"] },
        { id: "top1", type: "line", points: ["A", "D"] },
        { id: "top2", type: "line", points: ["E", "H"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [78, 116] },
        { id: "labelB", text: "B", at: [118, 296] },
        { id: "labelC", text: "C", at: [236, 296] },
        { id: "labelD", text: "D", at: [196, 116] },
        { id: "labelE", text: "E", at: [278, 116] },
        { id: "labelF", text: "F", at: [318, 296] },
        { id: "labelG", text: "G", at: [436, 296] },
        { id: "labelH", text: "H", at: [396, 116] }
      ]
    },
    steps: [
      {
        title: "Show the two bases",
        text: "The first parallelogram stands on BC and the second stands on FG.",
        highlight: ["base1", "base2", "labelB", "labelC", "labelF", "labelG"]
      },
      {
        title: "Draw the first parallelogram",
        text: "ABCD is one parallelogram with its top side parallel to BC.",
        highlight: ["abcd", "top1", "base1", "labelA", "labelD"]
      },
      {
        title: "Draw the second parallelogram",
        text: "EFGH is the other parallelogram with top side parallel to FG.",
        highlight: ["efgh", "top2", "base2", "labelE", "labelH"]
      },
      {
        title: "Use equal base and equal altitude",
        text: "The two bases are equal, and the heights are also equal. This makes the two areas equal.",
        highlight: ["base1", "base2", "top1", "top2", "abcd", "efgh"]
      },
      {
        title: "State the theorem result",
        text: "Therefore area of parallelogram ABCD equals area of parallelogram EFGH.",
        highlight: ["abcd", "efgh"]
      }
    ]
  },
  {
    id: "t1613",
    number: "Theorem 16.1.3",
    chapter: "Chapter 16 - Area",
    tag: "Area",
    title: "Triangles on the same base and of the same altitude are equal in area.",
    statement: "If triangles stand on the same base and between the same parallels, their areas are equal.",
    intro: "Take triangles ABC and DBC on the same base BC. Their top vertices lie on one line parallel to BC.",
    proofHint: "Both triangles have the same base BC and the same perpendicular height, so their areas are equal.",
    studentTip: "Two triangles can look different and still have equal area if base and height are the same.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        B: [180, 280], C: [360, 280], A: [250, 120], D: [300, 120], M: [110, 120], N: [500, 120]
      },
      shapes: [
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "mn", type: "line", points: ["M", "N"] },
        { id: "abc", type: "polygon", points: ["A", "B", "C"] },
        { id: "dbc", type: "polygon", points: ["D", "B", "C"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [253, 110] },
        { id: "labelB", text: "B", at: [168, 296] },
        { id: "labelC", text: "C", at: [366, 296] },
        { id: "labelD", text: "D", at: [305, 110] },
        { id: "labelM", text: "M", at: [96, 118] },
        { id: "labelN", text: "N", at: [506, 118] }
      ]
    },
    steps: [
      {
        title: "Draw the common base",
        text: "Both triangles use the same base BC.",
        highlight: ["bc", "labelB", "labelC"]
      },
      {
        title: "Show equal altitude",
        text: "Points A and D lie on line MN parallel to BC, so the two triangles have the same height.",
        highlight: ["mn", "bc", "labelA", "labelD", "labelM", "labelN"]
      },
      {
        title: "Show triangle ABC",
        text: "Triangle ABC stands on base BC with vertex A.",
        highlight: ["abc", "labelA", "labelB", "labelC"]
      },
      {
        title: "Show triangle DBC",
        text: "Triangle DBC also stands on base BC, but with vertex D.",
        highlight: ["dbc", "labelD", "labelB", "labelC"]
      },
      {
        title: "Conclude equal area",
        text: "Same base and same altitude imply equal area. Therefore area of triangle ABC = area of triangle DBC.",
        highlight: ["abc", "dbc", "bc", "mn"]
      }
    ]
  },
  {
    id: "t1614",
    number: "Theorem 16.1.4",
    chapter: "Chapter 16 - Area",
    tag: "Area",
    title: "Triangles on equal bases and of equal altitudes are equal in area.",
    statement: "If two triangles stand on equal bases and have equal heights, then their areas are equal.",
    intro: "Take triangles ABC and DEF on equal bases BC and EF. Their top vertices lie on a line parallel to the bases, so the altitudes are equal.",
    proofHint: "Area of a triangle depends on one-half multiplied by base and height. If the bases are equal and the heights are equal, the areas must be equal.",
    studentTip: "This theorem is like the triangle version of equal base and equal altitude for parallelograms.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        B: [120, 280], C: [230, 280], E: [320, 280], F: [430, 280], A: [175, 120], D: [375, 120], X: [80, 120], Y: [470, 120]
      },
      shapes: [
        { id: "xy", type: "line", points: ["X", "Y"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "ef", type: "line", points: ["E", "F"] },
        { id: "abc", type: "polygon", points: ["A", "B", "C"] },
        { id: "def", type: "polygon", points: ["D", "E", "F"] }
      ],
      labels: [
        { id: "labelA", text: "A", at: [179, 112] },
        { id: "labelB", text: "B", at: [108, 296] },
        { id: "labelC", text: "C", at: [236, 296] },
        { id: "labelD", text: "D", at: [379, 112] },
        { id: "labelE", text: "E", at: [308, 296] },
        { id: "labelF", text: "F", at: [436, 296] },
        { id: "labelX", text: "X", at: [68, 116] },
        { id: "labelY", text: "Y", at: [476, 116] }
      ]
    },
    steps: [
      {
        title: "Draw two equal bases",
        text: "First show the two equal bases BC and EF.",
        highlight: ["bc", "ef", "labelB", "labelC", "labelE", "labelF"]
      },
      {
        title: "Show the equal-altitude line",
        text: "Points A and D lie on line XY, which is parallel to the bases, so the heights of both triangles are equal.",
        highlight: ["xy", "bc", "ef", "labelA", "labelD", "labelX", "labelY"]
      },
      {
        title: "Draw triangle ABC",
        text: "Triangle ABC stands on base BC with vertex A above it.",
        highlight: ["abc", "labelA", "labelB", "labelC"]
      },
      {
        title: "Draw triangle DEF",
        text: "Triangle DEF stands on equal base EF with vertex D above it.",
        highlight: ["def", "labelD", "labelE", "labelF"]
      },
      {
        title: "Conclude equal area",
        text: "Because the bases are equal and the altitudes are equal, area of triangle ABC equals area of triangle DEF.",
        highlight: ["abc", "def", "bc", "ef", "xy"]
      }
    ]
  },
  {
    id: "c10_t911",
    number: "Theorem 9.1(i)",
    chapter: "Chapter 9 - Circles",
    tag: "Circles",
    title: "One and only one circle can pass through three non-collinear points.",
    statement: "Through any three non-collinear points A, B and C, exactly one circle can be drawn.",
    intro: "Take three non-collinear points A, B and C. Join AB and BC, then draw the perpendicular bisectors of these chords to meet at O.",
    proofHint: "The centre must be equally distant from A, B and C. The intersection of two perpendicular bisectors gives one unique point O, so only one circle can be formed.",
    studentTip: "This theorem explains why three non-collinear points determine one unique circle.",
    diagram: {
      viewBox: "0 0 600 360",
      points: {
        O: [250, 150], A: [410, 260], B: [470, 190], C: [485, 110], D: [440, 225], H: [368, 150], F: [160, 105], K: [160, 150]
      },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "C" },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "oc", type: "line", points: ["O", "C"] },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "df", type: "line", points: ["D", "F"] },
        { id: "hk", type: "line", points: ["H", "K"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [258, 146] },
        { id: "labelA", text: "A", at: [414, 277] },
        { id: "labelB", text: "B", at: [478, 194] },
        { id: "labelC", text: "C", at: [493, 110] },
        { id: "labelD", text: "D", at: [444, 238] },
        { id: "labelH", text: "H", at: [374, 146] }
      ]
    },
    steps: [
      { title: "Take three points", text: "Mark three non-collinear points A, B and C.", highlight: ["A", "B", "C", "labelA", "labelB", "labelC"] },
      { title: "Join the points", text: "Join AB and BC so we can work with two chords.", highlight: ["ab", "bc", "labelA", "labelB", "labelC"] },
      { title: "Draw two perpendicular bisectors", text: "Draw the perpendicular bisectors of AB and BC. These two lines meet at O.", highlight: ["df", "hk", "labelO", "labelD", "labelH"] },
      { title: "Use equal distances", text: "Because O lies on the bisector of AB and BC, it is equally distant from A, B and C.", highlight: ["oa", "ob", "oc", "labelO", "labelA", "labelB", "labelC"] },
      { title: "Draw the unique circle", text: "A circle with centre O and radius OA passes through A, B and C. This circle is unique.", highlight: ["circleArc", "oa", "ob", "oc"] }
    ]
  },
  {
    id: "c10_t912",
    number: "Theorem 9.1(ii)",
    chapter: "Chapter 9 - Circles",
    tag: "Circles",
    title: "A line drawn from the centre to bisect a chord is perpendicular to the chord.",
    statement: "If M is the midpoint of chord AB of a circle with centre O, then OM is perpendicular to AB.",
    intro: "Take a circle with centre O and chord AB. Let M be the midpoint of AB and join O to A, O to B and O to M.",
    proofHint: "OA = OB as radii, AM = MB by given, and OM is common. So triangles OAM and OBM are congruent, giving equal adjacent angles at M, each 90 degrees.",
    studentTip: "In circle theorems, midpoint of a chord and perpendicular from the centre often appear together.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 120], A: [200, 240], B: [400, 240], M: [300, 240] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "om", type: "line", points: ["O", "M"] },
        { id: "ab", type: "line", points: ["A", "B"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 116] },
        { id: "labelA", text: "A", at: [188, 248] },
        { id: "labelB", text: "B", at: [407, 248] },
        { id: "labelM", text: "M", at: [308, 258] }
      ]
    },
    steps: [
      { title: "Show the chord", text: "Draw circle O with chord AB and midpoint M.", highlight: ["circleArc", "ab", "labelA", "labelB", "labelM"] },
      { title: "Join the centre to the chord", text: "Join OA, OB and OM.", highlight: ["oa", "ob", "om", "labelO"] },
      { title: "Form two triangles", text: "Triangles OAM and OBM are formed on both sides of OM.", highlight: ["oa", "ob", "om", "ab"] },
      { title: "Apply congruence", text: "OA = OB, AM = MB and OM is common, so the two triangles are congruent.", highlight: ["oa", "ob", "om", "labelM"] },
      { title: "Conclude perpendicularity", text: "The equal angles at M form a straight line, so each angle is 90 degrees. Hence OM is perpendicular to AB.", highlight: ["om", "ab", "labelM"] }
    ]
  },
  {
    id: "c10_t913",
    number: "Theorem 9.1(iii)",
    chapter: "Chapter 9 - Circles",
    tag: "Circles",
    title: "Perpendicular from the centre of a circle on a chord bisects it.",
    statement: "If OM is perpendicular to chord AB, then M is the midpoint of AB.",
    intro: "Take a circle with centre O and chord AB. Draw OM perpendicular to AB and join O to A and O to B.",
    proofHint: "Triangles OAM and OBM are right triangles with OA = OB as radii and OM common. So they are congruent and AM = MB.",
    studentTip: "This is the converse of the previous theorem.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 120], A: [205, 240], B: [395, 240], M: [300, 240] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "om", type: "line", points: ["O", "M"] },
        { id: "ab", type: "line", points: ["A", "B"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 116] },
        { id: "labelA", text: "A", at: [192, 248] },
        { id: "labelB", text: "B", at: [402, 248] },
        { id: "labelM", text: "M", at: [308, 258] }
      ]
    },
    steps: [
      { title: "Take a chord and perpendicular", text: "Draw chord AB and perpendicular OM from the centre.", highlight: ["circleArc", "ab", "om", "labelO", "labelM"] },
      { title: "Join the radii", text: "Join OA and OB.", highlight: ["oa", "ob", "labelA", "labelB"] },
      { title: "Create right triangles", text: "Triangles OAM and OBM are right triangles because OM is perpendicular to AB.", highlight: ["oa", "ob", "om", "ab"] },
      { title: "Use congruence", text: "OA = OB as radii and OM is common, so the two right triangles are congruent.", highlight: ["oa", "ob", "om", "labelO"] },
      { title: "Show the chord is bisected", text: "Corresponding sides give AM = MB. Therefore M is the midpoint of AB.", highlight: ["ab", "labelM", "labelA", "labelB"] }
    ]
  },
  {
    id: "c10_t914",
    number: "Theorem 9.1(iv)",
    chapter: "Chapter 9 - Circles",
    tag: "Circles",
    title: "If two chords of a circle are congruent, then they are equidistant from the centre.",
    statement: "Equal chords AB and CD of a circle are at equal distances from centre O.",
    intro: "Take equal chords AB and CD of a circle with centre O. Draw OH perpendicular to AB and OK perpendicular to CD.",
    proofHint: "The perpendicular from the centre bisects each chord. So AH = CK because half of equal chords are equal. Then right triangles OAH and OCK become congruent, giving OH = OK.",
    studentTip: "Equal chord means equal distance from the centre.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 170], A: [220, 90], B: [230, 270], C: [420, 115], D: [390, 285], H: [225, 180], K: [402, 198] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "cd", type: "line", points: ["C", "D"] },
        { id: "oh", type: "line", points: ["O", "H"] },
        { id: "ok", type: "line", points: ["O", "K"] },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "oc", type: "line", points: ["O", "C"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 166] }, { id: "labelA", text: "A", at: [210, 86] },
        { id: "labelB", text: "B", at: [220, 286] }, { id: "labelC", text: "C", at: [427, 112] },
        { id: "labelD", text: "D", at: [395, 301] }, { id: "labelH", text: "H", at: [210, 194] }, { id: "labelK", text: "K", at: [410, 209] }
      ]
    },
    steps: [
      { title: "Show two equal chords", text: "Draw equal chords AB and CD in the same circle.", highlight: ["circleArc", "ab", "cd", "labelA", "labelB", "labelC", "labelD"] },
      { title: "Drop perpendiculars from the centre", text: "Draw OH perpendicular to AB and OK perpendicular to CD.", highlight: ["oh", "ok", "labelH", "labelK", "labelO"] },
      { title: "Use chord-bisector theorem", text: "Each perpendicular from the centre bisects its chord, so H and K are midpoints.", highlight: ["oh", "ok", "ab", "cd"] },
      { title: "Compare the right triangles", text: "Using equal radii and equal half-chords, triangles OAH and OCK are congruent.", highlight: ["oa", "oc", "oh", "ok"] },
      { title: "Conclude equal distance", text: "Therefore the perpendicular distances from O to both equal chords are equal, so OH = OK.", highlight: ["oh", "ok", "labelO"] }
    ]
  },
  {
    id: "c10_t915",
    number: "Theorem 9.1(v)",
    chapter: "Chapter 9 - Circles",
    tag: "Circles",
    title: "Two chords of a circle which are equidistant from the centre are congruent.",
    statement: "If two chords are at equal distance from the centre, then the chords are equal.",
    intro: "Take chords AB and CD of a circle with centre O. Draw OH perpendicular to AB and OK perpendicular to CD such that OH = OK.",
    proofHint: "Using equal radii and equal distances from the centre, triangles OAH and OCK are congruent. Then their half-chords are equal, so AB = CD.",
    studentTip: "This is the converse of the previous theorem.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 170], A: [220, 90], B: [230, 270], C: [420, 115], D: [390, 285], H: [225, 180], K: [402, 198] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "cd", type: "line", points: ["C", "D"] },
        { id: "oh", type: "line", points: ["O", "H"] },
        { id: "ok", type: "line", points: ["O", "K"] },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "oc", type: "line", points: ["O", "C"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 166] }, { id: "labelA", text: "A", at: [210, 86] },
        { id: "labelB", text: "B", at: [220, 286] }, { id: "labelC", text: "C", at: [427, 112] },
        { id: "labelD", text: "D", at: [395, 301] }, { id: "labelH", text: "H", at: [210, 194] }, { id: "labelK", text: "K", at: [410, 209] }
      ]
    },
    steps: [
      { title: "Take two chords", text: "Draw two chords AB and CD in the circle.", highlight: ["circleArc", "ab", "cd"] },
      { title: "Mark equal distances from the centre", text: "Draw OH and OK perpendicular to the chords and take OH = OK.", highlight: ["oh", "ok", "labelH", "labelK"] },
      { title: "Use radii and perpendiculars", text: "Join the centre to A and C so that right triangles can be formed.", highlight: ["oa", "oc", "oh", "ok"] },
      { title: "Apply triangle congruence", text: "Equal radii and equal distances from the centre make triangles OAH and OCK congruent.", highlight: ["oa", "oc", "oh", "ok", "labelO"] },
      { title: "Conclude equal chords", text: "The equal half-chords give AB = CD, so the chords are congruent.", highlight: ["ab", "cd", "labelA", "labelB", "labelC", "labelD"] }
    ]
  },
  {
    id: "c10_t1211",
    number: "Theorem 12.1(i)",
    chapter: "Chapter 12 - Angles In A Circle",
    tag: "Angles In A Circle",
    title: "The measure of a central angle is double that of the angle subtended by the corresponding minor arc.",
    statement: "If arc AC subtends central angle AOC and circumference angle ABC, then angle AOC = 2 angle ABC.",
    intro: "Take a circle with centre O. Join OA, OB and OC, and produce BO to meet the circle at D as in the figure.",
    proofHint: "By splitting the big figure into triangles and using equal radii, the outside central angle becomes double the circumference angle standing on the same arc.",
    studentTip: "Central angle is always twice the angle at the circumference standing on the same arc.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 170], A: [205, 260], B: [300, 70], C: [405, 260], D: [300, 320] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "B" },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] },
        { id: "oc", type: "line", points: ["O", "C"] },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "bd", type: "line", points: ["B", "D"] },
        { id: "ac", type: "line", points: ["A", "C"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 168] }, { id: "labelA", text: "A", at: [193, 272] },
        { id: "labelB", text: "B", at: [308, 64] }, { id: "labelC", text: "C", at: [412, 272] }, { id: "labelD", text: "D", at: [308, 336] }
      ]
    },
    steps: [
      { title: "Show the same arc AC", text: "Mark arc AC and the two angles standing on it: central angle AOC and circumference angle ABC.", highlight: ["circleArc", "labelA", "labelB", "labelC", "labelO"] },
      { title: "Join the centre", text: "Join OA, OB and OC to create isosceles triangles inside the circle.", highlight: ["oa", "ob", "oc"] },
      { title: "Draw the extra line BD", text: "Produce BO to D as shown so the figure can be split into simpler angle relations.", highlight: ["ob", "bd", "labelD"] },
      { title: "Use equal radii", text: "Since OA = OB and OB = OC, opposite angles in the isosceles triangles can be compared.", highlight: ["oa", "ob", "oc", "ab", "bc"] },
      { title: "Conclude the main relation", text: "The central angle standing on arc AC is twice the circumference angle on the same arc, so angle AOC = 2 angle ABC.", highlight: ["oa", "oc", "ab", "bc", "ac"] }
    ]
  },
  {
    id: "c10_t1212",
    number: "Theorem 12.1(ii)",
    chapter: "Chapter 12 - Angles In A Circle",
    tag: "Angles In A Circle",
    title: "Any two angles in the same segment of a circle are equal.",
    statement: "Angles standing on the same arc AB are equal, so angle ACB = angle ADB.",
    intro: "Take chord AB of a circle with centre O. Let angles ACB and ADB stand on the same arc AB.",
    proofHint: "Each circumference angle standing on arc AB is half of the same central angle AOB, so the two angles must be equal.",
    studentTip: "Same segment means same arc and same chord relation.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 190], A: [210, 270], B: [400, 270], C: [240, 90], D: [365, 95] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "ac", type: "line", points: ["A", "C"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "ad", type: "line", points: ["A", "D"] },
        { id: "bd", type: "line", points: ["B", "D"] },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "ob", type: "line", points: ["O", "B"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 186] }, { id: "labelA", text: "A", at: [198, 286] },
        { id: "labelB", text: "B", at: [408, 286] }, { id: "labelC", text: "C", at: [232, 86] }, { id: "labelD", text: "D", at: [372, 90] }
      ]
    },
    steps: [
      { title: "Take one chord AB", text: "Draw chord AB and two points C and D on the same segment of the circle.", highlight: ["circleArc", "ab", "labelA", "labelB", "labelC", "labelD"] },
      { title: "Show both circumference angles", text: "Angles ACB and ADB both stand on the same arc AB.", highlight: ["ac", "bc", "ad", "bd"] },
      { title: "Join the centre to the chord", text: "Join OA and OB so that central angle AOB is formed.", highlight: ["oa", "ob", "labelO"] },
      { title: "Use Theorem 12.1(i)", text: "Each angle on the circumference standing on arc AB is half of angle AOB.", highlight: ["oa", "ob", "ac", "bc", "ad", "bd"] },
      { title: "Conclude equality", text: "Since both angles are half of the same central angle, angle ACB equals angle ADB.", highlight: ["ac", "bc", "ad", "bd", "ab"] }
    ]
  },
  {
    id: "c10_t1213",
    number: "Theorem 12.1(iii)",
    chapter: "Chapter 12 - Angles In A Circle",
    tag: "Angles In A Circle",
    title: "The angle in a semicircle is a right angle; in a major segment it is acute; in a minor segment it is obtuse.",
    statement: "Angles in different segments of a circle change according to whether the subtended arc is semicircle, major segment, or minor segment.",
    intro: "Consider chord AB and different positions of point C on the circle so the angle subtends different arcs.",
    proofHint: "Using the central-angle theorem, the circumference angle is half of the corresponding central angle. This immediately gives right, acute, or obtuse cases.",
    studentTip: "Semicircle gives 90 degrees. Smaller arc gives larger circumference angle, and larger arc gives smaller circumference angle.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O1: [110, 180], A1: [30, 180], B1: [190, 180], C1: [110, 80], O2: [300, 180], A2: [220, 220], B2: [380, 220], C2: [300, 95], O3: [490, 180], A3: [410, 160], B3: [570, 160], C3: [490, 95] },
      shapes: [
        { id: "circle1", type: "circle", center: "O1", radiusPoint: "C1" },
        { id: "circle2", type: "circle", center: "O2", radiusPoint: "C2" },
        { id: "circle3", type: "circle", center: "O3", radiusPoint: "C3" },
        { id: "fig1", type: "polyline2", coords: [[30,180],[110,80],[190,180]] },
        { id: "fig2", type: "polyline2", coords: [[220,220],[300,95],[380,220]] },
        { id: "fig3", type: "polyline2", coords: [[410,160],[490,95],[570,160]] }
      ],
      labels: [
        { id: "labelF1", text: "Fig I", at: [90, 300] },
        { id: "labelF2", text: "Fig II", at: [280, 300] },
        { id: "labelF3", text: "Fig III", at: [470, 300] }
      ]
    },
    steps: [
      { title: "Show the semicircle case", text: "In the first figure, AB is a diameter, so the angle standing on the semicircle is a right angle.", highlight: ["circle1", "fig1", "labelF1"] },
      { title: "Show the major-segment case", text: "In the second figure, the angle stands on a major arc, so it becomes acute.", highlight: ["circle2", "fig2", "labelF2"] },
      { title: "Show the minor-segment case", text: "In the third figure, the angle stands on a minor arc, so it becomes obtuse.", highlight: ["circle3", "fig3", "labelF3"] },
      { title: "Use the central-angle relation", text: "Each circumference angle is half of its corresponding central angle, which explains all three cases.", highlight: ["circle1", "circle2", "circle3"] },
      { title: "State the complete theorem", text: "Therefore angle in a semicircle is right, in a major segment acute, and in a minor segment obtuse.", highlight: ["fig1", "fig2", "fig3"] }
    ]
  },
  {
    id: "c10_t1214",
    number: "Theorem 12.1(iv)",
    chapter: "Chapter 12 - Angles In A Circle",
    tag: "Angles In A Circle",
    title: "The opposite angles of any quadrilateral inscribed in a circle are supplementary.",
    statement: "If ABCD is a cyclic quadrilateral, then angle A + angle C = 180 degrees and angle B + angle D = 180 degrees.",
    intro: "Take quadrilateral ABCD inscribed in a circle with centre O. Draw OA, OB, OC and OD as needed.",
    proofHint: "Each opposite angle is half of a central angle subtending its arc. The two corresponding central angles together make a full angle relation that gives 180 degrees.",
    studentTip: "Cyclic quadrilateral means all four vertices lie on one circle.",
    diagram: {
      viewBox: "0 0 600 360",
      points: { O: [300, 180], A: [220, 260], B: [255, 95], C: [390, 245], D: [360, 80] },
      shapes: [
        { id: "circleArc", type: "circle", center: "O", radiusPoint: "A" },
        { id: "ab", type: "line", points: ["A", "B"] },
        { id: "bc", type: "line", points: ["B", "C"] },
        { id: "cd", type: "line", points: ["C", "D"] },
        { id: "da", type: "line", points: ["D", "A"] },
        { id: "ac", type: "line", points: ["A", "C"] },
        { id: "oa", type: "line", points: ["O", "A"] },
        { id: "oc", type: "line", points: ["O", "C"] }
      ],
      labels: [
        { id: "labelO", text: "O", at: [308, 176] }, { id: "labelA", text: "A", at: [210, 276] },
        { id: "labelB", text: "B", at: [247, 88] }, { id: "labelC", text: "C", at: [397, 260] }, { id: "labelD", text: "D", at: [367, 76] }
      ]
    },
    steps: [
      { title: "Draw a cyclic quadrilateral", text: "Mark four points A, B, C and D on one circle and join them to form quadrilateral ABCD.", highlight: ["circleArc", "ab", "bc", "cd", "da"] },
      { title: "Look at opposite angles", text: "The theorem compares angle A with angle C, and angle B with angle D.", highlight: ["labelA", "labelB", "labelC", "labelD"] },
      { title: "Use the same arc relation", text: "Each angle at the circumference is half of a central angle standing on its arc.", highlight: ["oa", "oc", "ac", "labelO"] },
      { title: "Add the angle pairs", text: "The corresponding central-angle sums convert the opposite circumference-angle pairs into supplementary pairs.", highlight: ["ab", "bc", "cd", "da", "ac"] },
      { title: "State the cyclic-quadrilateral result", text: "Therefore opposite angles of a quadrilateral inscribed in a circle are supplementary.", highlight: ["ab", "bc", "cd", "da", "circleArc"] }
    ]
  }
];

const theoremNarratives = {
  t1211: {
    focusTitle: "Perpendicular bisector means equal distance",
    focusText: "This theorem teaches a very important geometric idea: if a point lies on the perpendicular bisector of a line segment, then that point is balanced with respect to both end points. In simple words, the point is equally far from A and B.",
    focusReason: "This idea is used again and again in construction, locus questions, and proofs where we must show two line segments are equal.",
    conceptExplain: "Look carefully at the diagram. The line through C is not just any line. It cuts AB exactly at the midpoint C, and it also makes a right angle with AB. Because C is the midpoint, AC and CB are equal. Because the line is perpendicular, both small angles at C become 90 degrees. These two facts let us compare the triangles on the left and right side of the bisector. Once the triangles match, the slant sides from P to A and P to B must also match. That is why the point P is equally distant from A and B.",
    memoryTip: "Whenever you see the words perpendicular bisector, immediately think: midpoint + right angle + equal distance from both end points.",
    stepDetails: [
      "We first mark AB because the whole theorem starts with one line segment whose end points are A and B.",
      "The vertical line through C is important because it gives us both conditions at once: C is the middle point, and the angle at C is 90 degrees.",
      "At this stage, the theorem is really using the meaning of right bisector: it splits AB into two equal parts and stands upright on it.",
      "By joining P to A and P to B, we create two triangles so that triangle congruence can be applied in an organized way.",
      "After proving the two triangles are congruent, the result PA = PB comes automatically from corresponding sides."
    ]
  },
  t1212: {
    focusTitle: "Equal distances lead back to the perpendicular bisector",
    focusText: "This theorem works in the opposite direction of Theorem 12.1.1. Instead of starting with a perpendicular bisector, we start with a point P that is equally distant from A and B and prove that it must lie on the perpendicular bisector.",
    focusReason: "This converse idea is very important in geometry because it helps us prove a line is a perpendicular bisector from distance information.",
    conceptExplain: "Point P is given such that PA = PB. This tells us that P is balanced with respect to A and B, but we still have to prove where P lies. We take C as the midpoint of AB and join P to C. Now triangles ACP and BCP can be compared. PA and PB are equal by given information, AC and BC are equal because C is the midpoint, and PC is common. So the triangles are congruent by SSS. This gives equal angles at C. Since these angles stand on the straight line AB, they add up to 180 degrees, so each must be 90 degrees. Therefore PC is perpendicular to AB and passes through its midpoint, which means P lies on the right bisector of AB.",
    memoryTip: "Theorem 12.1.1 says point on bisector gives equal distances. Theorem 12.1.2 says equal distances give point on bisector.",
    stepDetails: [
      "The theorem begins with the equality PA = PB, so we know the point P is equally far from both end points.",
      "Choosing C as the midpoint is necessary because the definition of perpendicular bisector includes passing through the midpoint.",
      "Joining P to C creates the two triangles that will help us turn distance information into angle information.",
      "This is the main proof step: SSS congruence tells us the two triangles have equal corresponding angles at C.",
      "Equal adjacent angles on a straight line must each be 90 degrees, so PC is perpendicular to AB and is therefore the perpendicular bisector."
    ]
  },
  t1213: {
    focusTitle: "All perpendicular bisectors meet at one point",
    focusText: "This theorem says that the three perpendicular bisectors of a triangle do not wander separately. They always meet at one special point called the circumcenter.",
    focusReason: "This common point is the center of the circle passing through all three vertices of the triangle, so it is very important in geometry.",
    conceptExplain: "Start by drawing two perpendicular bisectors. Their meeting point is O. Since O lies on the bisector of AB, it is equally distant from A and B. Since O also lies on the bisector of BC, it is equally distant from B and C. That means OA = OB and OB = OC, so OA = OC as well. Once O is equally distant from A and C, it must also lie on the perpendicular bisector of AC. Therefore the third bisector also passes through the same point O.",
    memoryTip: "Perpendicular bisectors of a triangle always lead to one center: the circumcenter, which is equally distant from all three vertices.",
    stepDetails: [
      "We begin with triangle ABC because the theorem is about the three sides of one triangle.",
      "Only two bisectors are drawn first, because once their intersection point is found, the third one can be proved without extra construction.",
      "This is the key logical step: a point on a perpendicular bisector is always equidistant from the two end points of that side.",
      "Now the equalities are connected like a chain: OA = OB and OB = OC, so the first and third distances are also equal.",
      "Since O is equally distant from A and C, the definition of perpendicular bisector tells us that O lies on the bisector of AC too."
    ]
  },
  t1214: {
    focusTitle: "Angle bisector gives equal perpendicular distance",
    focusText: "This theorem does not compare distances along the arms of the angle. It compares the shortest distance from point P to each arm, and shortest distance is always measured by a perpendicular.",
    focusReason: "This helps students understand what it really means for a point to be equally placed inside an angle.",
    conceptExplain: "Point P lies on the bisector of angle AOB, so the angle is split into two equal parts. From P we draw two perpendiculars, one to OA and one to OB. These give the distances from P to the two arms. Now triangles OPQ and OPR each contain one right angle, they share side OP, and the angle at O is equal because OP lies on the angle bisector. So the triangles are congruent. As a result, the perpendicular lengths PQ and PR are equal. This shows that every point on the angle bisector is equally distant from both arms of the angle.",
    memoryTip: "For angle bisector questions, remember: equal angles inside, equal perpendicular distances outside.",
    stepDetails: [
      "The two rays OA and OB create the angle in which all the action happens.",
      "Point P is not random. It is chosen on the bisector, so the two smaller angles near O are equal.",
      "The perpendiculars are necessary because distance from a point to a line is never taken slantwise; it is always the shortest perpendicular distance.",
      "Once the two right triangles are formed, the angle bisector gives one pair of equal angles and OP gives one common side.",
      "The conclusion PQ = PR means P is equally distant from both arms, which is exactly the theorem statement."
    ]
  },
  t1215: {
    focusTitle: "Equal distances from the arms lead back to the angle bisector",
    focusText: "This theorem is the converse of Theorem 12.1.4. Instead of starting from the angle bisector, we start from a point inside the angle whose perpendicular distances from both arms are equal.",
    focusReason: "It helps prove that a point lies on an angle bisector when equal perpendicular distances are given in a diagram or proof.",
    conceptExplain: "Point P lies inside angle AOB. From P, we draw PQ perpendicular to OB and PR perpendicular to OA, and these two distances are equal. Joining P to O forms two right triangles, OPQ and OPR. Each has one right angle, both share the hypotenuse OP, and PQ = PR is given. So the triangles are congruent by RHS or hypotenuse-side. Once the triangles are congruent, the angles at O become equal. That means OP divides angle AOB into two equal parts, so P lies on the bisector of the angle.",
    memoryTip: "Theorem 12.1.4 goes from bisector to equal distances. Theorem 12.1.5 goes from equal distances to bisector.",
    stepDetails: [
      "The point P is drawn inside the angle because the theorem is about a point placed between the two arms.",
      "The perpendiculars PQ and PR show the real distances from P to the arms of the angle.",
      "Joining O to P is a smart construction because it creates two triangles that share one side.",
      "The two triangles are right triangles with equal hypotenuse and one equal side, so congruence can be used directly.",
      "Once the angles at O match, OP becomes the angle bisector and the theorem is proved."
    ]
  },
  t1216: {
    focusTitle: "All angle bisectors meet at one point",
    focusText: "This theorem shows that the three angle bisectors of a triangle are concurrent. Their common point is called the incenter.",
    focusReason: "The incenter is important because it is equally distant from all three sides and becomes the center of the incircle.",
    conceptExplain: "Take the bisectors of angles B and C and let them meet at I. Because I lies on the bisector of angle B, it is equally distant from sides BA and BC. Because I also lies on the bisector of angle C, it is equally distant from sides BC and CA. Therefore it must be equally distant from BA and CA as well. A point equally distant from the two arms of angle A lies on its bisector, so I also lies on the bisector of angle A. Hence all three angle bisectors pass through the same point I.",
    memoryTip: "Angle bisectors meet at the incenter, and the incenter is equally distant from the three sides of the triangle.",
    stepDetails: [
      "We start with the whole triangle because concurrency is about three lines meeting in one figure.",
      "Two angle bisectors are enough to locate the common point I.",
      "The perpendicular distances from I to the sides are drawn because equal distance from a side is measured perpendicularly.",
      "The theorem of angle bisector is now applied two times: once at angle B and once at angle C.",
      "After proving I is equally distant from AB and AC, we know it must also lie on the bisector of angle A."
    ]
  },
  t1611: {
    focusTitle: "Same base and same parallels mean same area",
    focusText: "This theorem compares area, not shape. Two parallelograms can look different in slant or width arrangement, but if they stand on the same base and between the same parallels, their areas are equal.",
    focusReason: "It gives the basic area rule used later for triangles, parallelograms, and many comparison questions.",
    conceptExplain: "Area of a parallelogram depends on two things: base and altitude. In this theorem, both parallelograms share the same base AB. They also lie between the same parallel lines, which means their perpendicular heights from the base are equal. Since area = base x height, and both of these quantities are the same for the two figures, the total areas must be equal.",
    memoryTip: "For parallelograms, do not judge by slant. Judge by base and height.",
    stepDetails: [
      "The common base is shown first because both figures are built on the same bottom side.",
      "The first parallelogram gives one area to compare.",
      "The second parallelogram may lean differently, but it still uses the same base line.",
      "Same parallels guarantee the same perpendicular height from AB to the upper side of each parallelogram.",
      "Once base and height match, the areas must also match."
    ]
  },
  t1612: {
    focusTitle: "Equal base and equal height still give equal area",
    focusText: "This theorem is a wider version of the previous one. Here the parallelograms do not need to stand on the same exact base line, but their bases must be equal in length and their altitudes must be equal.",
    focusReason: "It helps students compare separate figures by the same area formula instead of depending on position.",
    conceptExplain: "For any parallelogram, area is found by multiplying base by altitude. If one parallelogram has base BC and the other has base FG, and these two bases are equal, then the first condition is satisfied. If the heights are also equal, then the second condition is satisfied. Equal base multiplied by equal height gives equal area, so the two parallelograms must have the same area.",
    memoryTip: "Same base is not necessary here. Equal base is enough if the heights are equal too.",
    stepDetails: [
      "The two bases are shown separately so we can compare their lengths clearly.",
      "The first parallelogram is identified with one top line parallel to its base.",
      "The second parallelogram is constructed in the same way on another equal base.",
      "Once equal base and equal altitude are known, the area rule applies directly.",
      "The position of the figure changes, but the area does not."
    ]
  },
  t1613: {
    focusTitle: "Triangles with same base and same height have equal area",
    focusText: "Two triangles may point in different directions or have different side lengths, but if they stand on the same base and reach the same parallel line above it, their areas are equal.",
    focusReason: "This theorem is used repeatedly in coordinate geometry, proofs with parallels, and area comparison questions.",
    conceptExplain: "The area of a triangle is one-half multiplied by base and height. In this theorem, both triangles share the same base BC. Also, their top vertices A and D lie on a line parallel to BC, so the perpendicular height of each triangle from BC is the same. Since both have the same base and same height, their half-base-times-height values are equal. Therefore their areas are equal.",
    memoryTip: "For triangles, same base plus same altitude means same area, even if the shapes are not identical.",
    stepDetails: [
      "The common base BC is the starting point because both triangles are compared on this one side.",
      "The line MN shows why the heights are equal: both top vertices lie on one line parallel to BC.",
      "The first triangle uses vertex A and the same base BC.",
      "The second triangle uses vertex D and again the same base BC.",
      "Because both triangles have identical base and height values in the area formula, their areas are equal."
    ]
  },
  t1614: {
    focusTitle: "Equal base and equal height give equal triangle area",
    focusText: "This theorem extends the previous result. The triangles do not need to share the same base line, but their bases must be equal and their altitudes must also be equal.",
    focusReason: "It is useful when comparing separate triangles placed in different positions but having the same base-length and same height.",
    conceptExplain: "Area of a triangle is half of base multiplied by height. In this theorem, triangle ABC stands on base BC and triangle DEF stands on base EF. If BC = EF and the two triangles have equal altitudes, then both triangles have the same base value and the same height value in the area formula. Since one-half times equal base times equal height gives the same result for both, their areas are equal. So the position of the triangles may change, but the area remains the same when base and altitude are equal.",
    memoryTip: "For triangles, same base is one way. Equal base is another way. In both cases, equal altitude controls the area.",
    stepDetails: [
      "We first identify the two bases because the theorem compares BC with EF.",
      "The top line XY helps us see that both vertices are at the same height above their bases.",
      "Triangle ABC is the first figure whose area is being studied.",
      "Triangle DEF is the second figure built in the same height condition on an equal base.",
      "Since the base lengths and altitudes match, both triangle areas must be equal."
    ]
  },
  c10_t911: {
    focusTitle: "Three non-collinear points determine one unique circle",
    focusText: "This theorem explains how a circle is fixed by three points that do not lie on one straight line. Once such three points are given, only one circle can pass through them.",
    focusReason: "It is the basic idea behind the circumcircle of a triangle and helps students understand how the centre of a circle can be constructed.",
    conceptExplain: "Points A, B and C are first joined to make two chords, AB and BC. Then their perpendicular bisectors are drawn. A point on the perpendicular bisector of AB is equally distant from A and B, and a point on the perpendicular bisector of BC is equally distant from B and C. Their intersection O therefore becomes equally distant from A, B and C. That means OA = OB = OC. So a circle with centre O and radius OA must pass through all three points. Since the perpendicular bisectors intersect at only one point, the circle is also unique.",
    memoryTip: "Three points not on one line give one circle. The centre comes from the intersection of perpendicular bisectors.",
    stepDetails: [
      "We begin with three non-collinear points because a straight-line arrangement cannot form a unique circle in this way.",
      "Joining AB and BC gives us two line segments whose perpendicular bisectors can be constructed.",
      "The intersection point O is important because it satisfies equal-distance conditions for both pairs of end points.",
      "Once OA, OB and OC are equal, one radius is enough to draw a circle through all three points.",
      "Because the centre is unique, the whole circle is unique too."
    ]
  },
  c10_t912: {
    focusTitle: "Midpoint of a chord connects to the centre at a right angle",
    focusText: "If a line from the centre goes to the midpoint of a chord, that line does not meet the chord slantwise. It always meets it perpendicularly.",
    focusReason: "This theorem appears again and again in circle geometry because midpoint, chord and perpendicular relations are deeply connected.",
    conceptExplain: "Since M is the midpoint of AB, we know AM = MB. Also OA = OB because both are radii of the same circle. With OM common, triangles OAM and OBM are congruent by SSS. This gives the two angles at M equal. But these two equal angles lie on the straight line AB, so together they make 180 degrees. Hence each must be 90 degrees. Therefore OM is perpendicular to AB.",
    memoryTip: "Centre to midpoint of chord means perpendicular to chord.",
    stepDetails: [
      "The midpoint information is the starting condition of the theorem.",
      "Joining the centre to both end points creates triangles that can be compared.",
      "Equal radii and equal half-chords allow triangle congruence to be used.",
      "Equal adjacent angles on a straight line must each be right angles.",
      "So the line from the centre to the midpoint becomes perpendicular to the chord."
    ]
  },
  c10_t913: {
    focusTitle: "Perpendicular from the centre cuts a chord into two equal parts",
    focusText: "This theorem is the reverse of the previous one. Here the perpendicular condition is given first, and we prove that the chord is bisected.",
    focusReason: "It is very useful in proofs where a perpendicular from the centre is drawn and we need to show equal chord segments.",
    conceptExplain: "OM is perpendicular to AB, so triangles OAM and OBM are right triangles. OA = OB because they are radii, and OM is common. Therefore the two right triangles are congruent by hypotenuse-side. From this congruence, the corresponding sides AM and MB are equal. That means M is the midpoint of AB. So the perpendicular from the centre bisects the chord.",
    memoryTip: "Perpendicular from centre to chord means midpoint of the chord.",
    stepDetails: [
      "The perpendicular sign tells us the two triangles at M are right triangles.",
      "Both slant sides from O to the chord endpoints are radii, so they are equal.",
      "The common side OM is shared by both triangles.",
      "Right-triangle congruence gives equality of the two chord parts.",
      "Hence the foot of the perpendicular becomes the midpoint."
    ]
  },
  c10_t914: {
    focusTitle: "Equal chords stay equally far from the centre",
    focusText: "This theorem shows that chord length and distance from the centre move together. If two chords are equal, then their perpendicular distances from the centre are also equal.",
    focusReason: "It helps compare chords through distance instead of directly measuring the whole chord each time.",
    conceptExplain: "From the centre O, perpendiculars OH and OK are drawn to chords AB and CD. By the previous theorem, each perpendicular bisects its chord. So H and K become the midpoints. Since AB = CD, their halves are also equal. Now in right triangles OAH and OCK, OA = OC as radii, AH = CK as half of equal chords, and each triangle contains a right angle. So the triangles are congruent. Therefore the corresponding distances OH and OK are equal.",
    memoryTip: "Equal chord gives equal distance from the centre.",
    stepDetails: [
      "The theorem begins with equal chords, not equal distances.",
      "Perpendiculars from the centre are drawn so the chord-bisector theorem can be used.",
      "Once both chords are bisected, half-chords can be compared easily.",
      "Right-triangle congruence transfers chord equality into distance equality.",
      "So the centre lies equally far from both equal chords."
    ]
  },
  c10_t915: {
    focusTitle: "Equal distance from the centre gives equal chords",
    focusText: "This is the converse of the previous theorem. Here equal distances from the centre are given, and equal chord lengths are proved.",
    focusReason: "It allows students to work backward from perpendicular distance information to chord equality.",
    conceptExplain: "OH and OK are perpendicular distances from the centre to two chords and are equal. In right triangles OAH and OCK, OA = OC because both are radii, and OH = OK by given information. So the two triangles are congruent by hypotenuse-side. Therefore AH = CK. Since H and K are the midpoints of the chords, each full chord is twice its half-chord. Hence AB = CD.",
    memoryTip: "Equal distance from centre means equal chord.",
    stepDetails: [
      "We begin from equal distances rather than equal chords.",
      "Perpendiculars are necessary because distance from a point to a line is measured perpendicularly.",
      "Radii and equal perpendiculars create matching right triangles.",
      "Triangle congruence gives equality of the half-chords.",
      "Doubling equal halves gives equal full chords."
    ]
  },
  c10_t1211: {
    focusTitle: "Central angle is twice the circumference angle on the same arc",
    focusText: "This is one of the most important circle-angle theorems. It connects the angle at the centre with the angle on the circumference standing on the same arc.",
    focusReason: "Many later theorems in Chapter 12 are based directly on this relation.",
    conceptExplain: "The central angle AOC and the circumference angle ABC both stand on arc AC. By joining the centre to the points on the circle, the figure is split into isosceles triangles. Because radii are equal, pairs of base angles become equal. With the extra construction line through B and O, the angle relations can be arranged carefully. The result is that the central angle turns out to be exactly double the circumference angle standing on the same arc.",
    memoryTip: "Same arc: centre angle is double, circumference angle is half.",
    stepDetails: [
      "First identify the same arc AC so both angles can be compared correctly.",
      "The radii help create isosceles triangles inside the circle.",
      "The extra line through B helps split the figure into simpler angle relations.",
      "Equal radii lead to equal base angles, which makes the algebra of angles possible.",
      "Finally the centre angle becomes exactly twice the angle at the circumference."
    ]
  },
  c10_t1212: {
    focusTitle: "Angles in the same segment are equal",
    focusText: "If two angles stand on the same arc of a circle, then they are equal. This is one of the most frequently used results in circle geometry.",
    focusReason: "It simplifies many proofs because instead of calculating each angle separately, students can compare them through the same arc.",
    conceptExplain: "Angles ACB and ADB both stand on arc AB. From the previous theorem, each of these circumference angles is half of the same central angle AOB. Since both are equal to one-half of the same angle, they must be equal to each other. So any two angles in the same segment of a circle are equal.",
    memoryTip: "Same segment means same arc, and same arc means equal circumference angles.",
    stepDetails: [
      "The chord AB creates the common arc on which both angles stand.",
      "Points C and D are chosen on the same segment to compare the two angles.",
      "The central angle AOB is the shared reference angle for both circumference angles.",
      "Both circumference angles are half of the same central angle.",
      "Therefore the two angles must be equal."
    ]
  },
  c10_t1213: {
    focusTitle: "Angle size changes with the segment of the circle",
    focusText: "This theorem combines three related results: angle in a semicircle is right, angle in a major segment is acute, and angle in a minor segment is obtuse.",
    focusReason: "It helps students visually connect arc size with the size of the angle on the circumference.",
    conceptExplain: "A circumference angle is always half of the central angle standing on the same arc. If the central angle is 180 degrees because the arc is a semicircle, then the circumference angle becomes 90 degrees. If the angle stands on a major arc, the corresponding central angle is less than 180 degrees for the inside relation used in the theorem, so the circumference angle becomes acute. If the angle stands on a minor arc, the corresponding relation makes the circumference angle obtuse. So the type of segment determines the type of angle.",
    memoryTip: "Semicircle gives right angle. Major segment gives acute angle. Minor segment gives obtuse angle.",
    stepDetails: [
      "The first figure shows the special semicircle case with a diameter.",
      "The second figure places the angle in a major segment and the result becomes acute.",
      "The third figure places the angle in a minor segment and the result becomes obtuse.",
      "All three results come from the same central-angle theorem.",
      "So changing the arc changes the angle type."
    ]
  },
  c10_t1214: {
    focusTitle: "Opposite angles of a cyclic quadrilateral are supplementary",
    focusText: "When all four vertices of a quadrilateral lie on a circle, the opposite angles always add up to 180 degrees.",
    focusReason: "This is one of the most powerful theorems in circle geometry and is widely used in proofs and numerical problems.",
    conceptExplain: "In a cyclic quadrilateral, opposite angles stand on arcs that together complete the circle. Each angle at the circumference is half of the central angle subtending its arc. When the relevant central angles are added, they form the full required relation that makes the opposite circumference angles supplementary. Therefore angle A + angle C = 180 degrees and angle B + angle D = 180 degrees.",
    memoryTip: "Cyclic quadrilateral means opposite angles add to 180 degrees.",
    stepDetails: [
      "All four vertices lie on the same circle, so the quadrilateral is cyclic.",
      "We focus on one opposite pair at a time.",
      "Each circumference angle is linked to a central angle standing on the same arc.",
      "The arc relations make the two opposite angles add to a straight angle.",
      "So each opposite pair becomes supplementary."
    ]
  }
};

const easyWordBank = {
  "circle": "A round closed figure in which every point on the boundary is the same distance from the centre.",
  "collinear points": "Points lying on the same straight line.",
  "non-collinear points": "Points that do not lie on one straight line.",
  "circumference": "The boundary or outer curved line of a circle.",
  "chord": "A line segment joining any two points on a circle.",
  "radius": "A line segment from the centre of a circle to a point on the circle.",
  "diameter": "A chord passing through the centre of the circle.",
  "centre": "The exact middle point of a circle.",
  "perpendicular bisector": "A line that cuts another line into two equal parts at 90 degrees.",
  "perpendicular": "Meeting another line at an angle of 90 degrees.",
  "bisector": "A line or ray that divides something into two equal parts.",
  "midpoint": "The point exactly in the middle of a line segment.",
  "congruent": "Having exactly the same shape and size.",
  "hypotenuse": "The longest side of a right triangle.",
  "arc": "A curved part of the circle.",
  "central angle": "An angle whose vertex is at the centre of the circle.",
  "circumference angle": "An angle made on the circle by two chords. It is also called an angle at the circumference.",
  "segment": "A region of a circle between a chord and its arc.",
  "major arc": "The larger arc between two points on a circle.",
  "minor arc": "The smaller arc between two points on a circle.",
  "semicircle": "Half of a circle.",
  "cyclic quadrilateral": "A quadrilateral whose all four vertices lie on one circle.",
  "supplementary angles": "Two angles whose sum is 180 degrees.",
  "concurrent": "Lines meeting at one common point.",
  "equidistant": "At the same distance from two or more points or lines.",
  "altitude": "The perpendicular height from a vertex to the opposite side or its line.",
  "parallelogram": "A quadrilateral in which opposite sides are parallel.",
  "theorem": "A mathematical statement that is proved to be true.",
  "construction": "The drawing steps used to make a geometric figure.",
  "right angle": "An angle of 90 degrees."
};

const theoremTerms = {
  t1211: ["perpendicular bisector", "midpoint", "equidistant", "congruent"],
  t1212: ["midpoint", "congruent", "right angle", "perpendicular bisector"],
  t1213: ["perpendicular bisector", "concurrent", "equidistant"],
  t1214: ["bisector", "equidistant", "perpendicular", "congruent"],
  t1215: ["bisector", "equidistant", "hypotenuse", "congruent"],
  t1216: ["bisector", "concurrent", "equidistant"],
  t1611: ["parallelogram", "altitude"],
  t1612: ["parallelogram", "altitude"],
  t1613: ["altitude"],
  t1614: ["altitude"],
  c10_t911: ["non-collinear points", "circle", "perpendicular bisector", "radius", "centre"],
  c10_t912: ["chord", "centre", "radius", "midpoint", "perpendicular"],
  c10_t913: ["chord", "centre", "radius", "hypotenuse", "midpoint"],
  c10_t914: ["chord", "centre", "equidistant", "radius", "congruent"],
  c10_t915: ["chord", "centre", "equidistant", "radius", "congruent"],
  c10_t1211: ["central angle", "circumference angle", "arc", "radius"],
  c10_t1212: ["segment", "arc", "circumference angle", "central angle"],
  c10_t1213: ["semicircle", "major arc", "minor arc", "segment"],
  c10_t1214: ["cyclic quadrilateral", "supplementary angles", "arc", "central angle"]
};

const theoremList = document.getElementById("theoremList");
const classTabs = document.getElementById("classTabs");
const chapterCards = document.getElementById("chapterCards");
const sidebarLabel = document.getElementById("sidebarLabel");
const theoremTitle = document.getElementById("theoremTitle");
const theoremStatement = document.getElementById("theoremStatement");
const topicLabel = document.getElementById("topicLabel");
const theoremTag = document.getElementById("theoremTag");
const theoremNumber = document.getElementById("theoremNumber");
const stepCounter = document.getElementById("stepCounter");
const progressFill = document.getElementById("progressFill");
const purposeText = document.getElementById("purposeText");
const givenText = document.getElementById("givenText");
const proveText = document.getElementById("proveText");
const constructionText = document.getElementById("constructionText");
const guideIntro = document.getElementById("guideIntro");
const stepTitle = document.getElementById("stepTitle");
const stepText = document.getElementById("stepText");
const proofHint = document.getElementById("proofHint");
const studentTip = document.getElementById("studentTip");
const conceptExplain = document.getElementById("conceptExplain");
const memoryTip = document.getElementById("memoryTip");
const termList = document.getElementById("termList");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const theoremSvg = document.getElementById("theoremSvg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");
const playAllBtn = document.getElementById("playAllBtn");

let currentTheoremIndex = 0;
let currentStepIndex = 0;
let autoplayTimer = null;
let activeClass = "9";
let activeChapter = "all";

function createSvgElement(tag, attributes = {}, className = "") {
  const element = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (className) {
    element.setAttribute("class", className);
  }
  return element;
}

function pointsToString(keys, map) {
  return keys.map((key) => map[key].join(",")).join(" ");
}

function renderDiagram(theorem) {
  theoremSvg.innerHTML = "";
  theoremSvg.setAttribute("viewBox", theorem.diagram.viewBox);
  const map = theorem.diagram.points;

  theorem.diagram.shapes.forEach((shape) => {
    let node;
    if (shape.type === "line") {
      const [x1, y1] = shape.points ? map[shape.points[0]] : shape.coords[0];
      const [x2, y2] = shape.points ? map[shape.points[1]] : shape.coords[1];
      node = createSvgElement("line", { x1, y1, x2, y2 }, "geom-line");
      node.id = shape.id;
      theoremSvg.appendChild(node);
      return;
    }
    if (shape.type === "circle") {
      const [cx, cy] = map[shape.center];
      const [px, py] = map[shape.radiusPoint];
      const r = Math.hypot(px - cx, py - cy);
      node = createSvgElement("circle", { cx, cy, r }, "geom-shape");
      node.id = shape.id;
      theoremSvg.appendChild(node);
      return;
    }
    if (shape.type === "polyline") {
      node = createSvgElement("polyline", { points: shape.coords.map((pair) => pair.join(",")).join(" ") }, "geom-mark");
      node.id = shape.id;
      theoremSvg.appendChild(node);
      return;
    }
    if (shape.type === "polyline2") {
      node = createSvgElement("polyline", { points: shape.coords.map((pair) => pair.join(",")).join(" ") }, "geom-line");
      node.id = shape.id;
      theoremSvg.appendChild(node);
      return;
    }
    if (shape.type === "polygon") {
      const fill = createSvgElement("polygon", { points: pointsToString(shape.points, map) }, "geom-fill");
      fill.id = shape.id;
      theoremSvg.appendChild(fill);
      const outline = createSvgElement("polygon", { points: pointsToString(shape.points, map) }, "geom-shape");
      outline.id = `${shape.id}-outline`;
      theoremSvg.appendChild(outline);
    }
  });

  Object.entries(map).forEach(([name, [cx, cy]]) => {
    const point = createSvgElement("circle", { cx, cy, r: 5.5 }, "geom-point");
    point.id = name;
    theoremSvg.appendChild(point);
  });

  theorem.diagram.labels.forEach((label) => {
    const node = createSvgElement("text", { x: label.at[0], y: label.at[1] }, "geom-label");
    node.id = label.id;
    node.textContent = label.text;
    theoremSvg.appendChild(node);
  });
}

function clearHighlights() {
  theoremSvg.querySelectorAll(".highlight, .pulse").forEach((node) => {
    node.classList.remove("highlight", "pulse");
  });
}

function applyStepHighlights(step) {
  clearHighlights();
  step.highlight.forEach((id) => {
    const main = document.getElementById(id);
    if (main) {
      main.classList.add("highlight");
      if (main.classList.contains("geom-point")) {
        main.classList.add("pulse");
      }
    }
    const outline = document.getElementById(`${id}-outline`);
    if (outline) {
      outline.classList.add("highlight");
    }
  });
}

function updateStep() {
  const theorem = theoremData[currentTheoremIndex];
  const step = theorem.steps[currentStepIndex];
  const narrative = theoremNarratives[theorem.id];
  stepCounter.textContent = `Step ${currentStepIndex + 1} / ${theorem.steps.length}`;
  progressFill.style.width = `${((currentStepIndex + 1) / theorem.steps.length) * 100}%`;
  stepTitle.textContent = step.title;
  stepText.textContent = narrative
    ? `${step.text} ${narrative.stepDetails[currentStepIndex]}`
    : step.text;
  applyStepHighlights(step);
  prevBtn.disabled = currentStepIndex === 0;
  nextBtn.disabled = currentStepIndex === theorem.steps.length - 1;
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
  autoBtn.textContent = "Auto Play";
  playAllBtn.textContent = "Play Current Theorem";
}

function startAutoplay() {
  stopAutoplay();
  autoBtn.textContent = "Stop";
  playAllBtn.textContent = "Stop Playing";
  autoplayTimer = setInterval(() => {
    const theorem = theoremData[currentTheoremIndex];
    if (currentStepIndex >= theorem.steps.length - 1) {
      stopAutoplay();
      return;
    }
    currentStepIndex += 1;
    updateStep();
  }, 2200);
}

function toggleAutoplay() {
  if (autoplayTimer) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

function setActiveTab() {
  theoremList.querySelectorAll(".theorem-tab").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.index) === currentTheoremIndex);
  });
}

function getChapterKey(theorem) {
  if (theorem.id.startsWith("c10_t9")) {
    return "9";
  }
  if (theorem.id.startsWith("c10_t12")) {
    return "12";
  }
  return theorem.number.startsWith("Theorem 12") ? "12" : "16";
}

function getClassKey(theorem) {
  return theorem.id.startsWith("c10_") ? "10" : "9";
}

function getLearningDetails(theorem, narrative) {
  return {
    purpose: narrative ? narrative.focusText : theorem.statement,
    given: theorem.intro,
    prove: theorem.statement,
    construction: theorem.steps.map((step) => step.title).join(" -> "),
    resultTitle: theorem.number,
    resultText: theorem.statement
  };
}

function renderEasyTerms(theoremId) {
  const terms = theoremTerms[theoremId] || [];
  termList.innerHTML = "";

  if (!terms.length) {
    const item = document.createElement("li");
    item.textContent = "No difficult words listed for this theorem yet.";
    termList.appendChild(item);
    return;
  }

  terms.forEach((term) => {
    const item = document.createElement("li");
    const meaning = easyWordBank[term] || "Simple meaning will be added here.";
    item.innerHTML = `<strong>${term}:</strong> ${meaning}`;
    termList.appendChild(item);
  });
}

function textToBullets(text) {
  return text
    .split(". ")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.endsWith(".") ? item : `${item}.`);
}

function renderBulletList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function loadTheorem(index) {
  stopAutoplay();
  currentTheoremIndex = index;
  currentStepIndex = 0;
  const theorem = theoremData[index];
  const narrative = theoremNarratives[theorem.id];
  const details = getLearningDetails(theorem, narrative);
  topicLabel.textContent = theorem.chapter;
  theoremTitle.textContent = `${theorem.number} - ${theorem.title}`;
  theoremStatement.textContent = theorem.statement;
  theoremTag.textContent = theorem.tag;
  theoremNumber.textContent = theorem.number;
  guideIntro.textContent = theorem.intro;
  purposeText.textContent = details.purpose;
  givenText.textContent = details.given;
  proveText.textContent = details.prove;
  constructionText.textContent = details.construction;
  renderBulletList(
    conceptExplain,
    textToBullets(
      narrative
        ? `${narrative.focusTitle}. ${narrative.focusText} ${narrative.focusReason} ${narrative.conceptExplain}`
        : theorem.proofHint
    )
  );
  renderBulletList(proofHint, textToBullets(theorem.proofHint));
  renderBulletList(studentTip, textToBullets(theorem.studentTip));
  renderBulletList(memoryTip, textToBullets(narrative ? narrative.memoryTip : theorem.studentTip));
  renderEasyTerms(theorem.id);
  resultTitle.textContent = details.resultTitle;
  resultText.textContent = details.resultText;
  renderDiagram(theorem);
  setActiveTab();
  updateStep();
}

function getChapterGroups() {
  if (activeClass === "10") {
    return [
      { key: "all", label: "All Theorems", title: "Full Class 10 Explorer", text: "Study Chapter 9 and Chapter 12 together" },
      { key: "9", label: "Chapter 9", title: "Circles", text: "Chord, centre and circle-construction theorems" },
      { key: "12", label: "Chapter 12", title: "Angles In A Circle", text: "Central angle, same segment and cyclic quadrilateral" }
    ];
  }
  return [
    { key: "all", label: "All Theorems", title: "Full Class 9 Explorer", text: "Study all available theorems in one place" },
    { key: "12", label: "Chapter 12", title: "Line And Angle Bisectors", text: "Focus on construction, concurrency and converse theorems" },
    { key: "16", label: "Chapter 16", title: "Theorems Related With Area", text: "Compare area using base, altitude and parallel lines" }
  ];
}

function renderChapterCards() {
  chapterCards.innerHTML = "";
  getChapterGroups().forEach((group) => {
    const button = document.createElement("button");
    button.className = `chapter-card${group.key === activeChapter ? " active" : ""}`;
    button.type = "button";
    button.dataset.chapter = group.key;
    button.innerHTML = `<span class="chapter-card-label">${group.label}</span><strong>${group.title}</strong><small>${group.text}</small>`;
    button.addEventListener("click", () => {
      activeChapter = group.key;
      renderChapterCards();
      renderTheoremTabs();
      const nextIndex = theoremData.findIndex((theorem) =>
        getClassKey(theorem) === activeClass && (activeChapter === "all" || getChapterKey(theorem) === activeChapter)
      );
      if (nextIndex >= 0) {
        loadTheorem(nextIndex);
      }
    });
    chapterCards.appendChild(button);
  });
}

function renderTheoremTabs() {
  theoremList.innerHTML = "";
  const chapterGroups = activeClass === "10"
    ? [
      { heading: "Chapter 9 - Circles", ids: ["c10_t911", "c10_t912", "c10_t913", "c10_t914", "c10_t915"] },
      { heading: "Chapter 12 - Angles In A Circle", ids: ["c10_t1211", "c10_t1212", "c10_t1213", "c10_t1214"] }
    ]
    : [
      { heading: "Chapter 12 - Line and Angle Bisectors", ids: ["t1211", "t1212", "t1213", "t1214", "t1215", "t1216"] },
      { heading: "Chapter 16 - Theorems Related With Area", ids: ["t1611", "t1612", "t1613", "t1614"] }
    ];

  sidebarLabel.textContent = activeClass === "10" ? "Class 10 Theorems" : "Class 9 Theorems";

  chapterGroups.forEach((group) => {
    const chapterKey = group.heading.includes("Chapter 12") ? "12" : "16";
    const currentKey = activeClass === "10" && group.heading.includes("Chapter 9") ? "9" : chapterKey;
    if (activeChapter !== "all" && activeChapter !== currentKey) {
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.className = "chapter-group";

    const heading = document.createElement("p");
    heading.className = "chapter-heading";
    heading.textContent = group.heading;
    wrapper.appendChild(heading);

    group.ids.forEach((id) => {
      const index = theoremData.findIndex((theorem) => theorem.id === id);
      if (index === -1) {
        return;
      }
      const theorem = theoremData[index];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "theorem-tab";
      button.dataset.index = index;
      button.innerHTML = `<strong>${theorem.number}</strong><span>${theorem.title}</span>`;
      button.addEventListener("click", () => loadTheorem(index));
      wrapper.appendChild(button);
    });

    theoremList.appendChild(wrapper);
  });

  setActiveTab();
}

prevBtn.addEventListener("click", () => {
  if (currentStepIndex > 0) {
    currentStepIndex -= 1;
    updateStep();
  }
});

nextBtn.addEventListener("click", () => {
  const theorem = theoremData[currentTheoremIndex];
  if (currentStepIndex < theorem.steps.length - 1) {
    currentStepIndex += 1;
    updateStep();
  }
});

autoBtn.addEventListener("click", toggleAutoplay);
playAllBtn.addEventListener("click", toggleAutoplay);
classTabs.querySelectorAll(".class-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeClass = tab.dataset.class;
    activeChapter = "all";
    document.title = activeClass === "10"
      ? "MathVision FYP - Class 10 Theorems"
      : "MathVision FYP - Class 9 Theorems";
    classTabs.querySelectorAll(".class-tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
    });
    renderChapterCards();
    renderTheoremTabs();
    const nextIndex = theoremData.findIndex((theorem) => getClassKey(theorem) === activeClass);
    if (nextIndex >= 0) {
      loadTheorem(nextIndex);
    }
  });
});

renderChapterCards();
renderTheoremTabs();
loadTheorem(0);
