var expect = chai.expect

describe("#getDurations", function(){
  it("should return the same length of the original array", function(){
    expect(getDurations(songs).length).to.equal(199)
  });
  it("should return the correct format for each song", function(){
      expect(getDurations(songs)[0]).to.equal("4:00")
      expect(getDurations(songs)[1]).to.equal("3:20")
      expect(getDurations(songs)[2]).to.equal("4:10")
      expect(getDurations(songs)[3]).to.equal("4:17")
      expect(getDurations(songs)[198]).to.equal("4:55")
  });
});

describe("#getDurationsInSeconds", function(){
  it("should return the same length of the original array", function(){
    expect(getDurationsInSeconds(songs).length).to.equal(199)
  });
  it("should return the correct format for each song", function(){
      expect(getDurationsInSeconds(songs)[0]).to.equal(240)
      expect(getDurationsInSeconds(songs)[1]).to.equal(200)
      expect(getDurationsInSeconds(songs)[2]).to.equal(250)
      expect(getDurationsInSeconds(songs)[3]).to.equal(257)
      expect(getDurationsInSeconds(songs)[198]).to.equal(295)
  });
});

describe("#getMainArtists", function(){
  it("should return the same length of the original array", function(){
    expect(getMainArtists(songs).length).to.equal(199)
  });
  it("should return the correct artist for each song", function(){
      expect(getMainArtists(songs)[0]).to.equal("Santana")
      expect(getMainArtists(songs)[1]).to.equal("Christina Aguilera")
      expect(getMainArtists(songs)[2]).to.equal("Savage Garden")
      expect(getMainArtists(songs)[3]).to.equal("Mariah Carey")
      expect(getMainArtists(songs)[198]).to.equal("Adele")
  });
});

describe("#getBigHits", function(){
  it("should return all of the number one hits for more than 10 weeks", function(){
    expect(getBigHits(songs).length).to.equal(19)
  });
  it("should return the correct big hit", function(){
      expect(getBigHits(songs)[0].name).to.equal("Smooth")
      expect(getBigHits(songs)[0].month).to.equal(10)
      expect(getBigHits(songs)[0].year).to.equal(1999)
  });
});

describe("#getShortSongs", function(){
  it("should return all of the short songs", function(){
      expect(getShortSongs(songs).length).to.equal(1)
    });
    it("should return the correct short song", function(){
        expect(getShortSongs(songs)[0].artist).to.equal("OMI")
        expect(getShortSongs(songs)[0].month).to.equal(7)
        expect(getShortSongs(songs)[0].year).to.equal(2015)
    });
});

describe("#getSongsByArtist", function(){
  it("should find an artist correctly", function(){
      expect(getSongsByArtist(songs,'OMI').length).to.equal(1)
      expect(getSongsByArtist(songs,'OMI')[0].name).to.equal('Cheerleader')
  });
  it("should return an empty array if the artist is not found", function(){
      expect(getSongsByArtist(songs,'WRONG').length).to.equal(0)
  });
});

describe("#getOneHitWonders", function(){
    it("should return all of the number one hits for more than 10 weeks", function(){
      expect(getOneHitWonders(songs).length).to.equal(121)
    });
    it("should return the correct big hit", function(){
      expect(getOneHitWonders(songs)[0].name).to.equal("Smooth")
      expect(getOneHitWonders(songs)[0].month).to.equal(10)
      expect(getOneHitWonders(songs)[0].year).to.equal(1999)
    });
});

// change xit to it so that your tests are no longer pending!

describe("#summerJamCount", function(){
  xit("needs you to write some tests!", function(){
    // WRITE YOUR OWN TESTS!
  });
});

describe("#getTotalDurationInSeconds", function(){
  xit("needs you to write some tests!", function(){
    // WRITE YOUR OWN TESTS!
  });
});

describe("#getSongCountByArtist", function(){
  xit("needs you to write some tests!", function(){
    // WRITE YOUR OWN TESTS!
  });
});


